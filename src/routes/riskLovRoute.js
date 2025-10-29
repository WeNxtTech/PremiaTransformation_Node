const express = require('express');
const router = express.Router();
const riskLovController = require('../controllers/riskLovController');

router.get('/', riskLovController.getRiskLov);

module.exports = router;
