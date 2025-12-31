const express = require('express');
const router = express.Router();
const polChargeFieldController = require('../controllers/polChargeFieldController');

router.get('/', polChargeFieldController.get);


module.exports = router;
