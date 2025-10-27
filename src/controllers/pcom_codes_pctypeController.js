const { get } = require('../services/pcom_codes_pctypeService');
const { successResponse, errorResponse } = require('../utils/response'); // adjust path if needed

// exports.get = async (req, res) => {
//   try {
//     const { type } = req.query; // get both query params
//     const data = await getSecLov(type);
//     return successResponse(res, 200, 'Data fetched successfully', data);
//   } catch (error) {
//     return errorResponse(res, 500, 'Failed to fetch for one section data', error.message || error);
//   }
// };

exports.get = async (req, res) => {
  try {
    const { type } = req.query;
    if (!type) {
      return errorResponse(res, 400, 'Query parameter "type" is required');
    }
    const data = await get(type);
    return successResponse(res, 200, 'Data fetched successfully', data);
  } catch (error) {
    return errorResponse(res, 500, 'Failed to fetch data', error.message || error);
  }
};