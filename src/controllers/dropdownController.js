// controllers/dropdownController.js
const dropdownService = require('../services/dropdownService'); // import the instance
const { successResponse, errorResponse } = require('../utils/response'); 


exports.getDropdowns = async (req, res) => {
  try {
    const { source } = req.query;
    if (!source) {
      return errorResponse(res, 400, 'source is required');
    }

    const data = await dropdownService.getDropdownData(req.query);
    return successResponse(res, 200, 'Data fetched successfully', data);
  } catch (error) {
    console.error('Dropdown fetch error:', error);
    return errorResponse(res, 500, 'Failed to fetch dropdown data', error.message || error);
  }
};

