const { sequelize, QueryTypes } = require('../models');

exports.getCompanies = async (req, res, next) => {
  try {
    const { username } = req.query;
    const companies = await sequelize.query(
      `select muc_comp_code as value, comp_name as label from lm_menu_user_comp, LM_COMPANY where muc_comp_code = comp_code and muc_user_id = :muc_user_id`,
      { replacements: {muc_user_id: username }, type: QueryTypes.SELECT }
    );
    res.status(200).json({ status: 200, message: 'Companies fetched successfully', data: companies });
  } catch (err) {
    next(err);
  }
};

exports.getDivisions = async (req, res, next) => {
  try {
    const { username, company } = req.query;
    if (!company) return res.status(400).json({ status: 400, message: 'Company required' });

    const divisions = await sequelize.query(
      `select mucd_divn_code as value, (select divn_name from AM_DIVISION where divn_code = mucd_divn_code) as label from lm_menu_user_comp, lm_menu_user_comp_divn where MUCD_USER_ID = MUC_USER_ID and mucd_comp_code = MUC_COMP_CODE AND muc_user_id = :muc_user_id AND MUCD_COMP_CODE = :MUCD_COMP_CODE`,
      { replacements: {muc_user_id: username,MUCD_COMP_CODE: company }, type: QueryTypes.SELECT }
    );
    res.status(200).json({ status: 200, message: 'Divisions fetched successfully', data: divisions });
  } catch (err) {
    next(err);
  }
};

exports.getDepartments = async (req, res, next) => {
  try {
    const { username, company, division } = req.query;
    if (!company || !division) return res.status(400).json({ status: 400, message: 'Company and Division required' });

    const departments = await sequelize.query(
      `select mucd_dept_code as value, (select dept_name from AM_DEPARTMENT where dept_code = mucd_dept_code) as label from lm_menu_user_comp, lm_menu_user_comp_divn where MUCD_USER_ID = MUC_USER_ID and mucd_comp_code = MUC_COMP_CODE AND MUCD_COMP_CODE = :MUCD_COMP_CODE AND muc_user_id = :muc_user_id AND mucd_divn_Code = :mucd_divn_code`,
      { replacements: {muc_user_id: username,MUCD_COMP_CODE: company,mucd_divn_code: division }, type: QueryTypes.SELECT }
    );
    res.status(200).json({ status: 200, message: 'Departments fetched successfully', data: departments });
  } catch (err) {
    next(err);
  }
};
