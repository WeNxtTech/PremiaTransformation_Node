const PGIT_POL_PREM_DTLService = require('../services/PGIT_POL_PREM_DTLService');
const { successResponse } = require('../utils/response');

exports.getByPolSysId = async (req, res, next) => {
  try {
    const { ppdPolSysId } = req.query;

    if (!ppdPolSysId) {
      return res.status(400).json({
        success: false,
        message: "ppdPolSysId is required"
      });
    }

    const result = await PGIT_POL_PREM_DTLService.getByPolSysId(Number(ppdPolSysId));

    return successResponse(res, 200, 'Fetched', result);

  } catch (err) {
    next(err);
  }
};
