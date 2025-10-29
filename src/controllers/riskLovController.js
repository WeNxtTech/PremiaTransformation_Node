const { getRiskLov } = require('../services/riskLovService');
const { successResponse, errorResponse } = require('../utils/response'); // adjust path if needed


exports.getRiskLov = async (req, res) => {
  try {
    const data = await getRiskLov();
    return successResponse(res, 200, 'Data fetched successfully', data);
  } catch (error) {
        return errorResponse(res, 500, 'Failed to fetch for one section data', error.message || error);

  }
};
