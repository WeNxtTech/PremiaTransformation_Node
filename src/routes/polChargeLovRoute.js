const express = require('express');
const router = express.Router();
const polChargeLovController = require('../controllers/polChargeLovController');

router.get('/', polChargeLovController.get);


module.exports = router;
