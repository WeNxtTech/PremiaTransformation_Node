const express = require('express');
const router = express.Router();
const { calculatePremium } = require('../controllers/P_CALC_PREMIUMController');

router.get('/', calculatePremium);

module.exports = router;
