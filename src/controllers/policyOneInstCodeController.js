const { getOneInst } = require('../services/policyOneInstCodeService');
const { successResponse, errorResponse } = require('../utils/response');

exports.getOneInst = async (req, res) => {
  try {
    const { instCode } = req.query;
    const data = await getOneInst(instCode);
    return successResponse(res, 200, 'Data fetched successfully', data);
  } catch (error) {
    console.error('Controller error:', error);
    return errorResponse(res, 500, 'Failed to fetch class_of_bus data', error.message || error);
  }
};
