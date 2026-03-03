const PGITPOLDEDUCTIBLEService = require('../services/PGITPOLDEDUCTIBLEService');
const { successResponse } = require('../utils/response');

exports.getAll = async (req, res, next) => {
  try {
    const { limit, offset, order, sort = 'ASC', ...filters } = req.query;
    const queryOptions = { limit: limit ? parseInt(limit, 10) : parseInt(process.env.DEFAULT_LIMIT, 10), offset: offset ? parseInt(offset, 10) : 0, order: order ? [[order, sort.toUpperCase()]] : undefined };
    const result = await PGITPOLDEDUCTIBLEService.getAll(filters, queryOptions);
    return successResponse(res, 200, "Data Fetched", result);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const result = await PGITPOLDEDUCTIBLEService.create(req.body);
    return successResponse(res, 201, "Created", result);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const result = await PGITPOLDEDUCTIBLEService.update(req.params.id, req.body);
    return successResponse(res, 200, "Updated", result);
  } catch (err) {
    next(err);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const result = await PGITPOLDEDUCTIBLEService.deleteItem(req.params.id);
    return successResponse(res, 200, "Deleted", result);
  } catch (err) {
    next(err);
  }
};




exports.getByPolSysId = async (req, res, next) => {
  try {
    const { dedPolSysId ,riskSysId } = req.query;

    if (!dedPolSysId) {
      return res.status(400).json({
        success: false,
        message: "dedPolSysId is required"
      });
    }

    const result = await PGITPOLDEDUCTIBLEService.getByPolSysId(Number(dedPolSysId) , Number(riskSysId));

    return successResponse(res, 200, 'Fetched', result);

  } catch (err) {
    next(err);
  }
};




exports.save = async (req, res, next) => {
  try {
    const result = await PGITPOLDEDUCTIBLEService.saveRiskCover(req.body);
    return successResponse(res, 201, 'Saved', result);
  } catch (err) {
    next(err);
  }
};