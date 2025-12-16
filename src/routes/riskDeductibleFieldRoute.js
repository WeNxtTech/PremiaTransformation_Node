const express = require('express');
const router = express.Router();
const riskDeductibleFieldController = require('../controllers/riskDeductibleFieldController');

router.get('/', riskDeductibleFieldController.get);


module.exports = router;
