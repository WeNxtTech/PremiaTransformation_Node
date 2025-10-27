const loginService = require('../services/loginService');
const { successResponse } = require('../utils/response');

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const result = await loginService.loginUser({ username, password });
    return successResponse(res, 200, "Login successfully", result);
  } catch (err) {
    next(err);
  }
};
