const { calculatePremium } = require('../services/approveBtnService');
const { successResponse, errorResponse } = require('../utils/response');

exports.calculatePremium = async (req, res) => {
  try {
    const { pol_sys_id, pol_end_no_idx, pol_end_sr_no } = req.query;

    if (!pol_sys_id) {
      return errorResponse(res, 400, 'pol_sys_id query parameter is required');
    }
    if (pol_end_no_idx === undefined) {
      return errorResponse(res, 400, 'pol_end_no_idx query parameter is required');
    }
    if (pol_end_sr_no === undefined) {
      return errorResponse(res, 400, 'pol_end_sr_no query parameter is required');
    }

    const data = await calculatePremium(
      Number(pol_sys_id),
      Number(pol_end_no_idx),
      Number(pol_end_sr_no)
    );

    return successResponse(res, 200, 'Approved successfully', data);

  } catch (error) {
    console.error('Approve Error:', error);
    return errorResponse(res, 500, 'Failed to execute', error.message || error);
  }
};