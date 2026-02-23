const { PgitPolApplCurr ,sequelize } = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolApplCurr.findAll({ where: filters, limit, offset, ...(order && { order }) });
};




// exports.create = async (data) => {
//   const nextId = await getNextPolSysId();
//   data.pac_sys_id = nextId;

//   return await PgitPolApplCurr.create(data);
// };


exports.update = async (id, updatedData) => {
  const item = await PgitPolApplCurr.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolApplCurr with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitPolApplCurr.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolApplCurr with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PAC_POL_SYS_ID) => {
  const items = await PgitPolApplCurr.findAll({
    where: { PAC_POL_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.pac_sys_id; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};



async function getNextPolSysId() {
  const [result] = await sequelize.query('SELECT PAC_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL');
  return result[0].NEXTVAL || result[0].nextVal;  
}




exports.saveRiskCover = async (data) => {
  const payload = Array.isArray(data) ? data : [data];
  const transaction = await sequelize.transaction();

  try {
    const createdRecords = [];
    for (const item of payload) {
      if (item.pac_sys_id) {
        continue;
      }
      const {
        pac_pol_sys_id,
pac_curr_code,

      } = item;
      const existing = await PgitPolApplCurr.findOne({
        where: {
          pac_pol_sys_id,
pac_curr_code

        },
        transaction
      });

      if (existing) {
        throw new Error(
          `Duplicate Risk Cover found for Currency_code ${pac_curr_code} (Sys_Id ${pac_pol_sys_id})`
        );
      }
      const nextId = await getNextPolSysId();
      const payloadToSave = {
        ...item,
        pac_sys_id: nextId
      };
      Object.keys(payloadToSave).forEach(
        key => payloadToSave[key] === undefined && delete payloadToSave[key]
      );
      const created = await PgitPolApplCurr.create(payloadToSave, {
        transaction
      });
      createdRecords.push(created);
    }
    await transaction.commit();
    return Array.isArray(data)
      ? {
          message: 'Saved successfully',
          count: createdRecords.length,
          data: createdRecords
        }
      : createdRecords[0];

  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};
