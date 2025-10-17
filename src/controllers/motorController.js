const { getMotor } = require('../services/motorService');
const { successResponse, errorResponse } = require('../utils/response');

exports.getMotor = async (req, res) => {
  try {
    const { prodCode, instCode, busType } = req.query;
    const data = await getMotor(prodCode, instCode, busType);

    return successResponse(res, 200, 'Motor data fetched successfully', data);
  } catch (error) {
    console.error('Controller error:', error);
    return errorResponse(
      res,
      500,
      'Failed to fetch motor data',
      error.message || error
    );
  }
};
