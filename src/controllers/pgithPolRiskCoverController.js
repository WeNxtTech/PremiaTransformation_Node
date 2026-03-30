const pgithPolRiskCoverService = require('../services/pgithPolRiskCoverService');
const { successResponse } = require('../utils/response');

exports.getAll = async (req, res, next) => {
  try {
    const { limit, offset, order, sort = 'ASC', ...filters } = req.query;
    const queryOptions = { limit: limit ? parseInt(limit, 10) : parseInt(process.env.DEFAULT_LIMIT, 10), offset: offset ? parseInt(offset, 10) : 0, order: order ? [[order, sort.toUpperCase()]] : undefined };
    const result = await pgithPolRiskCoverService.getAll(filters, queryOptions);
    return successResponse(res, 200, "Data Fetched", result);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const result = await pgithPolRiskCoverService.create(req.body);
    return successResponse(res, 201, "Created", result);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const result = await pgithPolRiskCoverService.update(req.params.id, req.body);
    return successResponse(res, 200, "Updated", result);
  } catch (err) {
    next(err);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const result = await pgithPolRiskCoverService.deleteItem(req.params.id);
    return successResponse(res, 200, "Deleted", result);
  } catch (err) {
    next(err);
  }
};



exports.getByPolSysId = async (req, res, next) => {
  try {
    const { polSysId, endNoIdx, psecSysId, riskSysId } = req.query;

    if (!polSysId) {
      return res.status(400).json({
        success: false,
        message: "polSysId is required"
      });
    }

    const result = await pgithPolRiskCoverService.getByPolSysId(
      Number(polSysId),
      endNoIdx !== undefined ? Number(endNoIdx) : undefined,
      psecSysId !== undefined ? Number(psecSysId) : undefined,
      riskSysId !== undefined ? Number(riskSysId) : undefined
    );

    return successResponse(res, 200, 'Fetched', result);

  } catch (err) {
    next(err);
  }
};