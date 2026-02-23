const { PgitPolBroker ,sequelize} = require('../models');

exports.getAll = async (filters, { limit = 10, offset = 0, order } = {}) => {
  return PgitPolBroker.findAll({ where: filters, limit, offset, ...(order && { order }) });
};




// exports.create = async (data) => {
//   const nextId = await getNextPolSysId();
//   data.pbrk_sys_id = nextId;

//   return await PgitPolBroker.create(data);
// };


exports.update = async (id, updatedData) => {
  const item = await PgitPolBroker.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolBroker with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.update(updatedData);
  return item;
};

exports.deleteItem = async (id) => {
  const item = await PgitPolBroker.findByPk(id);
  if (!item) {
    const error = new Error(`PgitPolBroker with ID ${id} not found`);
    error.statusCode = 404;
    throw error;
  }
  await item.destroy();
  return item;
};


exports.getByPolSysId = async (PBRK_POL_SYS_ID) => {
  const items = await PgitPolBroker.findAll({
    where: { PBRK_POL_SYS_ID },
    raw: true
  });

  const groupedResult = items.reduce((acc, row) => {
    const key = row.pbrk_sys_id; 
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult;
};


async function getNextPolSysId() {
  const [result] = await sequelize.query('SELECT PBRK_SYS_ID_SEQ.NEXTVAL AS nextVal FROM DUAL');
  return result[0].NEXTVAL || result[0].nextVal;  
}



exports.saveRiskCover = async (data) => {
  const payload = Array.isArray(data) ? data : [data];
  const transaction = await sequelize.transaction();

  try {
    const createdRecords = [];
    for (const item of payload) {
      if (item.pbrk_sys_id) {
        continue;
      }
      const {
        pbrk_pol_sys_id,
pbrk_end_no_idx,
pbrk_end_sr_no,
pbrk_psec_sys_id,
pbrk_brk_code,
pbrk_comm_code,
      } = item;
      const existing = await PgitPolBroker.findOne({
        where: {
       pbrk_pol_sys_id,
pbrk_end_no_idx,
pbrk_end_sr_no,
pbrk_psec_sys_id,
pbrk_brk_code,
pbrk_comm_code,
        },
        transaction
      });

   if (existing) {
  throw new Error(
    `Duplicate Risk Cover not allowed for BRK=${pbrk_brk_code} and COMM=${pbrk_comm_code}`
  );
}
      const nextId = await getNextPolSysId();
      const payloadToSave = {
        ...item,
        pbrk_sys_id: nextId
      };
      Object.keys(payloadToSave).forEach(
        key => payloadToSave[key] === undefined && delete payloadToSave[key]
      );
      const created = await PgitPolBroker.create(payloadToSave, {
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
