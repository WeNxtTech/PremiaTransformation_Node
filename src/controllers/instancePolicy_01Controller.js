const { getInstPol } = require('../services/instancePolicy_01Service');
const { successResponse, errorResponse } = require('../utils/response'); // adjust path if needed

exports.getInstPol = async (req, res) => {
  try {
    const data = await getInstPol();
    return successResponse(res, 200, 'Data fetched successfully', data);
  } catch (error) {
    return errorResponse(res, 500, 'Failed to fetch main template data', error.message || error);
  }
};