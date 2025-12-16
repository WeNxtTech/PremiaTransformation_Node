const express = require('express');
const router = express.Router();
const riskSmiFieldController = require('../controllers/riskDiscountLovController');

router.get('/', riskSmiFieldController.get);


module.exports = router;
