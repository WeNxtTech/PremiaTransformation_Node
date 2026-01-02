exports.successResponse = (res, statusCode, message, data = null) => {

  let count=0;
 
 
if (Array.isArray(data)) {
 
  count = data.length;
}
else if (data && typeof data === 'object') {
  Object.values(data).forEach(value => {
    if (Array.isArray(value)) {
      count += value.length;
    } else {
      count++;
    }
  });
}
 

  return res.status(statusCode).json({
    // success: true,
    statusCode,
    message,
    count,
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
