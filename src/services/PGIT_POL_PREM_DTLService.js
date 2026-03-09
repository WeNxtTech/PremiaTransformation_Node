const { raw } = require('express');
const { PGIT_POL_PREM_DTL } = require('../models');

exports.getByPolSysId = async (PPD_POL_SYS_ID) => {
  const items = await PGIT_POL_PREM_DTL.findAll({
    where: {PPD_POL_SYS_ID},raw: true
  });
    const groupedResult = items.reduce((acc, row) => {
    const key = row.PPD_SYS_ID;
    (acc[key] ??= []).push(row);
    return acc;
  }, {});

  return groupedResult; 

  // return {
  //   success: true,
  //   message: 'Records fetched successfully',
  //   data: items
  // };
};
