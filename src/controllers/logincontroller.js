const loginService = require('../services/loginService');
const { successResponse } = require('../utils/response');

exports.login = async (req, res, next) => {
  try {
    const { username, password,division,department,company } = req.body;
    const result = await loginService.loginUser({ username, password,division,department,company });
    return successResponse(res, 200, "Login successfully", result);
  } catch (err) {
    next(err);
  }
};
exports.checkHealth = async (req, res, next) => {
  try {
    return successResponse(res, 200, "Health ok", {});
  } catch (err) {
    next(err);
  }
};
