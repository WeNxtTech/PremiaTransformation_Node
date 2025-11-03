const express = require('express');
const router = express.Router();
const riskLovController = require('../controllers/riskLovController');

router.get('/', riskLovController.getRiskData);

module.exports = router;
