const { getMotor } = require('../services/policyFieldsService');
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


exports.saveMotorData = async (req, res) => {
  try {
    const records = req.body; // expect JSON array of motor data objects
    const result = await saveMotorDataBulk(records);
    return successResponse(res, 201, 'Motor data saved successfully', result);
  } catch (error) {
    console.error('Save Controller error:', error);
    return errorResponse(res, 500, 'Failed to save motor data', error.message || error);
  }
};