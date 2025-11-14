const { get } = require('../services/sectionFieldService');
const { successResponse, errorResponse } = require('../utils/response');

exports.get = async (req, res) => {
  try {
    const { prodCode } = req.query;
    const data = await get(prodCode);

    return successResponse(res, 200, 'Section data fetched successfully', data);
  } catch (error) {
    console.error('Controller error:', error);
    return errorResponse(res, 500, 'Failed to fetch Section data', error.message || error);
  }
};
