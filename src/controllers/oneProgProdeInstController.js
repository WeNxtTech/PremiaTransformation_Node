const { getOne } = require('../services/oneProgProdeInstService');
const { successResponse, errorResponse } = require('../utils/response');

exports.getOne = async (req, res) => {
  try {
    const { prodCode, instCode, progCode } = req.query;
    const data = await getOne(prodCode, instCode, progCode);
    return successResponse(res, 200, 'Data fetched successfully', data);
  } catch (error) {
    console.error('Controller error:', error);
    return errorResponse(res, 500, 'Failed to fetch motor data', error.message || error);
  }
};
