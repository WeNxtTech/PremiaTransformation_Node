// const jwt = require('jsonwebtoken');
// const createError = require('../utils/createError');

// module.exports = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return next(createError('No token provided', 401));
//   }

//   const token = authHeader.split(' ')[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     if (err.name === 'TokenExpiredError') {
//       return next(createError('Token expired', 401));
//     }
//     return next(createError('Invalid token', 401));
//   }
// };
