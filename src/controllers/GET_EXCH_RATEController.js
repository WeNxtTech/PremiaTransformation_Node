const { Amount } = require('../services/GET_EXCH_RATEService');
const { successResponse, errorResponse } = require('../utils/response');

exports.Amount = async (req, res) => {
  try {
    const { pol_sys_id, pol_end_no_idx, pol_end_sr_no } = req.query;

    /* ===============================
       Validate required query params
       =============================== */
    if (!pol_sys_id) {
      return errorResponse(res, 400, 'pol_sys_id query parameter is required');
    }

    if (pol_end_no_idx === undefined) {
      return errorResponse(res, 400, 'pol_end_no_idx query parameter is required');
    }

    if (pol_end_sr_no === undefined) {
      return errorResponse(res, 400, 'pol_end_sr_no query parameter is required');
    }

    /* ===============================
       Call service (ONLY 3 params)
       =============================== */
    const data = await Amount(
      pol_sys_id,
      pol_end_no_idx,
      pol_end_sr_no
    );

    return successResponse(
      res,
      200,
      'Premium calculation executed successfully',
      data
    );
  } catch (error) {
    console.error('Error executing premium calculation:', error);
    return errorResponse(
      res,
      500,
      'Failed to execute premium calculation',
      error.message || error
    );
  }
};
