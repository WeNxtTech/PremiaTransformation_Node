// const { getMain } = require('../services/mainTemplateService');

// exports.getMain = async (req, res) => {
//   try {
//     const data = await getMain();
//     res.json(data);
//   } catch (error) {
//     console.error('Controller error:', error);
//     res.status(500).json({ error: 'Failed to fetch class_of_bus data' });
//   }
// };


const { getMain } = require('../services/mainTemplateService');
const { successResponse, errorResponse } = require('../utils/response'); // adjust path if needed

exports.getMain = async (req, res) => {
  try {
    const data = await getMain();
    return successResponse(res, 200, 'Data fetched successfully', data);
  } catch (error) {
    return errorResponse(res, 500, 'Failed to fetch main template data', error.message || error);
  }
};

