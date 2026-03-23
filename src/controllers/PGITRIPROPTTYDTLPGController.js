const PGITRIPROPTTYDTLPGService = require('../services/PGITRIPROPTTYDTLPGService');
const { successResponse } = require('../utils/response');

exports.getAll = async (req, res, next) => {
  try {
    const { limit, offset, order, sort = 'ASC', ...filters } = req.query;
    const queryOptions = { limit: limit ? parseInt(limit, 10) : parseInt(process.env.DEFAULT_LIMIT, 10), offset: offset ? parseInt(offset, 10) : 0, order: order ? [[order, sort.toUpperCase()]] : undefined };
    const result = await PGITRIPROPTTYDTLPGService.getAll(filters, queryOptions);
    return successResponse(res, 200, "Data Fetched", result);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const result = await PGITRIPROPTTYDTLPGService.create(req.body);
    return successResponse(res, 201, "Created", result);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const result = await PGITRIPROPTTYDTLPGService.update(req.params.id, req.body);
    return successResponse(res, 200, "Updated", result);
  } catch (err) {
    next(err);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const result = await PGITRIPROPTTYDTLPGService.deleteItem(req.params.id);
    return successResponse(res, 200, "Deleted", result);
  } catch (err) {
    next(err);
  }
};




// exports.getByPolSysId = async (req, res, next) => {
//   try {
//     const { RPTDG_POL_SYS_ID } = req.query;

//     if (!RPTDG_POL_SYS_ID) {
//       return errorResponse(res, 400, "RPTDG_POL_SYS_ID is required");
//     }

//     const polSysIdNum = Number(RPTDG_POL_SYS_ID);

//     if (isNaN(polSysIdNum)) {
//       return errorResponse(res, 400, "Invalid riPolSysId");
//     }

//     const result = await PGITRIPROPTTYDTLPGService.getByPolSysId(polSysIdNum);

//     return successResponse(
//       res,
//       200,
//       "Fetched successfully",
//       result
//     );

//   } catch (err) {
//     console.error("Error in getByPolSysId:", err);
//     next(err);
//   }
// };


exports.getById = async (req, res, next) => {
  try {
    const { RPTDG_POL_SYS_ID, RPTDG_END_NO_IDX, RPTDG_END_SR_NO } = req.query;

    if (
      RPTDG_POL_SYS_ID === undefined ||
      RPTDG_END_NO_IDX === undefined ||
      RPTDG_END_SR_NO === undefined
    ) {
      return res.status(400).json({
        message: 'RPTDG_POL_SYS_ID, RPTDG_END_NO_IDX, and RPTDG_END_SR_NO are required'
      });
    }

    const result = await PGITRIPROPTTYDTLPGService.getById({
      RPTDG_POL_SYS_ID: Number(RPTDG_POL_SYS_ID),
      RPTDG_END_NO_IDX: Number(RPTDG_END_NO_IDX),
      RPTDG_END_SR_NO: Number(RPTDG_END_SR_NO)
    });

    return successResponse(res, 200, 'Fetched', result);
  } catch (err) {
    next(err);
  }
};