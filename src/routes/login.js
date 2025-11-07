const express = require('express');
const router = express.Router();
const logincontroller = require('../controllers/logincontroller');
 
 
router.post('/login', logincontroller.login);
router.get('/health', logincontroller.checkHealth);
 
module.exports = router;