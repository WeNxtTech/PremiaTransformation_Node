const createError = require('../utils/createError');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET;

exports.loginUser = async ({ username, password }) => {
  const USERNAME = 'admin';
  const PASSWORD = 'admin123';

  if (username !== USERNAME) {
    throw createError('Customer not found', 404);
  }
  
  if (password !== PASSWORD) {
    throw createError('Invalid credentials', 401);
  }

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });

  return { token };
};
