const LMCompanyService = require('./lmCompanyService');

exports.get = async (req, res, next) => {
  try {
    const result = await LMCompanyService.get(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const result = await LMCompanyService.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
exports.update = async (req, res, next) => {
  try {
    const result = await LMCompanyService.update(req.params.COMP_CODE, req.body);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const result = await LMCompanyService.delete(req.params.COMP_CODE);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};