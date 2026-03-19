const express = require('express');
const router = express.Router();
const { calculatePremium } = require('../controllers/approveBtnController');

router.get('/', calculatePremium);

module.exports = router;
