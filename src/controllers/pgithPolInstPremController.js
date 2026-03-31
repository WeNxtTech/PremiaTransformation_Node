const pgithPolInstPremService = require('../services/pgithPolInstPremService');
const { successResponse } = require('../utils/response');

exports.getAll = async (req, res, next) => {
  try {
    const { limit, offset, order, sort = 'ASC', ...filters } = req.query;
    const queryOptions = { limit: limit ? parseInt(limit, 10) : parseInt(process.env.DEFAULT_LIMIT, 10), offset: offset ? parseInt(offset, 10) : 0, order: order ? [[order, sort.toUpperCase()]] : undefined };
    const result = await pgithPolInstPremService.getAll(filters, queryOptions);
    return successResponse(res, 200, "Data Fetched", result);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const result = await pgithPolInstPremService.create(req.body);
    return successResponse(res, 201, "Created", result);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const result = await pgithPolInstPremService.update(req.params.id, req.body);
    return successResponse(res, 200, "Updated", result);
  } catch (err) {
    next(err);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const result = await pgithPolInstPremService.deleteItem(req.params.id);
    return successResponse(res, 200, "Deleted", result);
  } catch (err) {
    next(err);
  }
};



exports.getByPolSysId = async (req, res, next) => {
  try {
    const { polSysId, endNoIdx } = req.query;

    if (!polSysId || !endNoIdx) {
      return res.status(400).json({
        success: false,
        message: "polSysId and endNoIdx are required"
      });
    }

    const result = await pgithPolInstPremService.getByPolSysId(Number(polSysId), Number(endNoIdx));

    return successResponse(res, 200, 'Fetched', result);

  } catch (err) {
    next(err);
  }
};