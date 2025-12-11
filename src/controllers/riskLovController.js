// const { getRiskLov } = require('../services/fireRiskLovService');
// const { successResponse, errorResponse } = require('../utils/response'); // adjust path if needed


// exports.getRiskLov = async (req, res) => {
//   try {
//     const data = await getRiskLov();
//     return successResponse(res, 200, 'Data fetched successfully', data);
//   } catch (error) {
//         return errorResponse(res, 500, 'Failed to fetch for one section data', error.message || error);

//   }
// };


const { getRiskData } = require('../services/riskLovService');
const { successResponse, errorResponse } = require('../utils/response');

exports.getRiskData = async (req, res) => {
  try {
    const { ProdCode,SectionCode } = req.query;

    // Validate required query params if needed
    if (!ProdCode ) {
      return errorResponse(res, 400, 'ProdCode  query parameters are required');
    }

    if (!SectionCode ) {
      return errorResponse(res, 400, 'ProdCode  query parameters are required');
    }
    const data = await getRiskData(ProdCode,SectionCode);

    return successResponse(res, 200, 'Risk data fetched successfully', data);
  } catch (error) {
    console.error('Error fetching Risk Data:', error);
    return errorResponse(res, 500, 'Failed to fetch Risk data', error.message || error);
  }
};
