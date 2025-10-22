const { getList } = require('../services/listOfInstanceService');
const { successResponse, errorResponse } = require('../utils/response');

exports.getList = async (req, res) => {
  try {
    const data = await getList();
    return successResponse(res, 200, 'Data fetched successfully', data);
  } catch (error) {
    console.error('Controller error:', error);
    return errorResponse(res, 500, 'Failed to fetch class_of_bus data', error.message || error);
  }
};
