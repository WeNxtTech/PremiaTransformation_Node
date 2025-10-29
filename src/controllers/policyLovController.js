const { getLov } = require('../services/policyLovService');
const { successResponse, errorResponse } = require('../utils/response'); 


exports.getLov = async (req, res) => {
  try {
    const data = await getLov();
    return successResponse(res, 200, 'Data fetched successfully', data);
  } catch (error) {
        return errorResponse(res, 500, 'Failed to fetch for one section data', error.message || error);

  }
};

