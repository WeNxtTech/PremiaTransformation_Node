const express = require('express');
const router = express.Router();
const riskDeductibleLovController = require('../controllers/riskDeductibleLovController');

router.get('/', riskDeductibleLovController.get);


module.exports = router;
