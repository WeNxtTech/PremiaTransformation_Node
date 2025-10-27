const { getSecLov } = require('../services/secForOneProdService');
const { successResponse, errorResponse } = require('../utils/response'); // adjust path if needed

exports.getSecLov = async (req, res) => {
  try {
    const { dasDapProdCode, dasDsType } = req.query; // get both query params
    const data = await getSecLov(dasDapProdCode, dasDsType);
    return successResponse(res, 200, 'Data fetched successfully', data);
  } catch (error) {
    return errorResponse(res, 500, 'Failed to fetch for one section data', error.message || error);
  }
};

