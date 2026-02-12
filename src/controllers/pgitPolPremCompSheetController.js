const PGITPOLPREMCOMPSHEETService = require('../services/PGITPOLPREMCOMPSHEETService');
const { successResponse } = require('../utils/response');

// exports.getAll = async (req, res, next) => {
//   try {
//     const { limit, offset, order, sort = 'ASC', ...filters } = req.query;
//     const queryOptions = { limit: limit ? parseInt(limit, 10) : parseInt(process.env.DEFAULT_LIMIT, 10), offset: offset ? parseInt(offset, 10) : 0, order: order ? [[order, sort.toUpperCase()]] : undefined };
//     const result = await PGITPOLPREMCOMPSHEETService.getAll(filters, queryOptions);
//     return successResponse(res, 200, "Data Fetched", result);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.create = async (req, res, next) => {
//   try {
//     const result = await PGITPOLPREMCOMPSHEETService.create(req.body);
//     return successResponse(res, 201, "Created", result);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.update = async (req, res, next) => {
//   try {
//     const result = await PGITPOLPREMCOMPSHEETService.update(req.params.id, req.body);
//     return successResponse(res, 200, "Updated", result);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.deleteItem = async (req, res, next) => {
//   try {
//     const result = await PGITPOLPREMCOMPSHEETService.deleteItem(req.params.id);
//     return successResponse(res, 200, "Deleted", result);
//   } catch (err) {
//     next(err);
//   }
// };


exports.getById = async (req, res, next) => {
  try {
    const { polSysId, polEndNoIdx, polEndSrNo } = req.query;

    if (
      polSysId === undefined ||
      polEndNoIdx === undefined ||
      polEndSrNo === undefined
    ) {
      return res.status(400).json({
        message: 'polSysId, polEndNoIdx, and polEndSrNo are required'
      });
    }

    const result = await PGITPOLPREMCOMPSHEETService.getById({
      PCST_SYS_ID: Number(polSysId),
      PCST_END_NO_IDX: Number(polEndNoIdx),
      PCST_END_SR_NO: Number(polEndSrNo)
    });

    return successResponse(res, 200, 'Fetched', result);
  } catch (err) {
    next(err);
  }
};