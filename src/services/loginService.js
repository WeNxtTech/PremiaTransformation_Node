const createError = require('../utils/createError');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET;

exports.loginUser = async ({ username, password, division,department ,company}) => {
  const USERNAME = 'admin';
  const PASSWORD = 'admin123';
  const DIVISION ='101';
  const DEPARTMENT ='20';
  const COMPANY ='001';

  if (username !== USERNAME) {
    throw createError('Customer not found', 404);
  }
  
  if (password !== PASSWORD) {
    throw createError('Invalid credentials', 401);
  }
  if( division!== DIVISION){
    throw createError('Invalid Division', 401);
  }
  if( department!== DEPARTMENT){
    throw createError('Invalid Department', 401);
  }
  if( company!== COMPANY){
    throw createError('Invalid Company', 401);
  }

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '24h' });

  return { token , division,department , company};
};
