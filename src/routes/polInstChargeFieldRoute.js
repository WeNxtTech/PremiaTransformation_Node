const express = require('express');
const router = express.Router();
const polInstChargeController = require('../controllers/polInstChargeFieldController');

router.get('/', polInstChargeController.get);


module.exports = router;
