const { get } = require('../services/riskFieldService');

exports.get = async (req, res) => {
  try {
    const data = await get();
    res.json(data);
  } catch (error) {
    console.error('Controller error:', error);
    res.status(500).json({ error: 'Failed to fetch Risk Field' });
  }
};

// const { get } = require('../services/riskFieldService');
// const { successResponse, errorResponse } = require('../utils/response');

// exports.get = async (req, res) => {
//   try {
//     const { progCode, blockName, modCode } = req.query;

//     // Call the service with query parameters
//     const data = await get(progCode, blockName, modCode);

//     return successResponse(res, 200, 'Risk fields fetched successfully', data);
//   } catch (error) {
//     console.error('Error fetching risk fields:', error);
//     return errorResponse(res, 500, 'Failed to fetch risk fields', error.message || error);
//   }
// };

