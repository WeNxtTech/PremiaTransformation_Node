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
exports.getById = async (req, res, next) => {
  try {
    const { RPTA_POL_SYS_ID, RPTA_END_NO_IDX, RPTA_END_SR_NO } = req.query;

    if (
      RPTA_POL_SYS_ID === undefined ||
      RPTA_END_NO_IDX === undefined ||
      RPTA_END_SR_NO === undefined
    ) {
      return res.status(400).json({
        message: 'RPTA_POL_SYS_ID, RPTA_END_NO_IDX, and RPTA_END_SR_NO are required'
      });
    }

    const result = await PGITRIPROPTTYALLOCService.getById({
      RPTA_POL_SYS_ID: Number(RPTA_POL_SYS_ID),
      RPTA_END_NO_IDX: Number(RPTA_END_NO_IDX),
      RPTA_END_SR_NO: Number(RPTA_END_SR_NO)
    });

    return successResponse(res, 200, 'Fetched', result);
  } catch (err) {
    next(err);
  }
};