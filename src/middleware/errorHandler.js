const { errorResponse } = require('../utils/response');

module.exports = (err, req, res, next) => {
  console.error(err);

  let code = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  // Handle Sequelize unique constraint errors
  if (err.name === 'SequelizeUniqueConstraintError') {
    code = 400;
    message = 'Duplicate value violates unique constraint';
  }

  return errorResponse(res, code, message, err.errors || null);
};
