  const pgitPolicyService = require('../services/pgitPolicyService');
  const { successResponse } = require('../utils/response');

  exports.getAll = async (req, res, next) => {
    try {
      const { limit, offset, order, sort = 'ASC', ...filters } = req.query;
      const queryOptions = { limit: limit ? parseInt(limit, 10) : parseInt(process.env.DEFAULT_LIMIT, 10), offset: offset ? parseInt(offset, 10) : 0, order: order ? [[order, sort.toUpperCase()]] : undefined };
      const result = await pgitPolicyService.getAll(filters, queryOptions);
      return successResponse(res, 200, "Data Fetched", result);
    } catch (err) {
      next(err);
    }
  };





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

    const result = await pgitPolicyService.getById({
      POL_SYS_ID: Number(polSysId),
      POL_END_NO_IDX: Number(polEndNoIdx),
      POL_END_SR_NO: Number(polEndSrNo)
    });

    return successResponse(res, 200, 'Fetched', result);
  } catch (err) {
    next(err);
  }
};

  exports.create = async (req, res, next) => {
    try {
      const result = await pgitPolicyService.create(req.body);
      return successResponse(res, 201, "Created", result);
    } catch (err) {
      next(err);
    }
  };
exports.update = async (req, res, next) => {
  try {
    const { polSysId, polEndNoIdx, polEndSrNo } = req.query;

    if (!polSysId || !polEndNoIdx || !polEndSrNo) {
      return res.status(400).json({
        message: 'polSysId, polEndNoIdx, and polEndSrNo are required'
      });
    }

    const result = await pgitPolicyService.update(
      {
        POL_SYS_ID: Number(polSysId),
        POL_END_NO_IDX: Number(polEndNoIdx),
        POL_END_SR_NO: Number(polEndSrNo)
      },
      req.body
    );

    return successResponse(res, 200, 'Updated', result);
  } catch (err) {
    next(err);
  }
};


  exports.deleteItem = async (req, res, next) => {
    try {
      const result = await pgitPolicyService.deleteItem(req.params.id);
      return successResponse(res, 200, "Deleted", result);
    } catch (err) {
      next(err);
    }
  };



exports.getStatus = async (req, res, next) => {
  try {
    const { POL_PROD_CODE } = req.query;

    if (!POL_PROD_CODE) {
      return res.status(400).json({
        message: 'POL_PROD_CODE is required'
      });
    }

    const data = await pgitPolicyService.getStatus(POL_PROD_CODE);

    return successResponse(res, 200, 'Status data fetched successfully', data);
  } catch (err) {
    next(err);
  }
};

