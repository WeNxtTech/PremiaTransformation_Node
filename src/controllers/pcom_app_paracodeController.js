const { get } = require('../services/pcom_app_paracodeService');
const { successResponse, errorResponse } = require('../utils/response'); // adjust path if needed

exports.get = async (req, res) => {
  try {
    const { type } = req.query; // get both query params
    const data = await get(type);
    return successResponse(res, 200, 'Data fetched successfully', data);
  } catch (error) {
    return errorResponse(res, 500, 'Failed to fetch for one section data', error.message || error);
  }
};

