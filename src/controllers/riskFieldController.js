const { get } = require('../services/riskFieldService');
const { successResponse, errorResponse } = require('../utils/response');

exports.get = async (req, res) => {
  try {
    const { section_code,product_code } = req.query;
    const data = await get(section_code,product_code);

    return successResponse(res, 200, 'Risk data fetched successfully', data);
  } catch (error) {
    console.error('Controller error:', error);
    return errorResponse(res, 500, 'Failed to fetch Risk data', error.message || error);
  }
};
