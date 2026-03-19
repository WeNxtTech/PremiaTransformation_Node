const PGITRIPROPTTYALLOCService = require('../services/PGITRIPROPTTYALLOCService');
const { successResponse } = require('../utils/response');

exports.getAll = async (req, res, next) => {
  try {
    const { limit, offset, order, sort = 'ASC', ...filters } = req.query;
    const queryOptions = { limit: limit ? parseInt(limit, 10) : parseInt(process.env.DEFAULT_LIMIT, 10), offset: offset ? parseInt(offset, 10) : 0, order: order ? [[order, sort.toUpperCase()]] : undefined };
    const result = await PGITRIPROPTTYALLOCService.getAll(filters, queryOptions);
    return successResponse(res, 200, "Data Fetched", result);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const result = await PGITRIPROPTTYALLOCService.create(req.body);
    return successResponse(res, 201, "Created", result);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const result = await PGITRIPROPTTYALLOCService.update(req.params.id, req.body);
    return successResponse(res, 200, "Updated", result);
  } catch (err) {
    next(err);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const result = await PGITRIPROPTTYALLOCService.deleteItem(req.params.id);
    return successResponse(res, 200, "Deleted", result);
  } catch (err) {
    next(err);
  }
};





exports.getByPolSysId = async (req, res, next) => {
  try {
    const { RPTA_POL_SYS_ID } = req.query;

    if (!RPTA_POL_SYS_ID) {
      return errorResponse(res, 400, "RPTA_POL_SYS_ID is required");
    }

    const polSysIdNum = Number(RPTA_POL_SYS_ID);

    if (isNaN(polSysIdNum)) {
      return errorResponse(res, 400, "Invalid riPolSysId");
    }

    const result = await PGITRIPROPTTYALLOCService.getByPolSysId(polSysIdNum);

    return successResponse(
      res,
      200,
      "Fetched successfully",
      result
    );

  } catch (err) {
    console.error("Error in getByPolSysId:", err);
    next(err);
  }
};