const express = require('express');
const router = express.Router();
const riskDiscountFieldController = require('../controllers/riskDiscountFieldController');

router.get('/', riskDiscountFieldController.get);


module.exports = router;
