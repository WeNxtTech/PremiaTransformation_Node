exports.successResponse = (res, statusCode, message, data = null) => {
  return res.status(statusCode).json({
    // success: true,
    statusCode,
    message,
    data
  });
};

exports.errorResponse = (res, statusCode, message, error = null) => {
  return res.status(statusCode).json({
    // success: false,
    statusCode,
    message,
    error
  });
};
