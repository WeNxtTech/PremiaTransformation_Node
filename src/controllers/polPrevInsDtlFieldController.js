const { get } = require('../services/polPrevInsDtlFieldService');
const { successResponse, errorResponse } = require('../utils/response');

exports.get = async (req, res) => {
  try {
    const data = await get();

    return successResponse(res, 200, 'Risk  data fetched successfully', data);
  } catch (error) {
    console.error('Controller error:', error);
    return errorResponse( res, 500, 'Failed to fetch  data',
      error.message || String(error)
    );
  }
};
