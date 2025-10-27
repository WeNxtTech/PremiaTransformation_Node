const express = require('express');
const router = express.Router();
const pcom_app_paracodeController = require('../controllers/pcom_app_paracodeController');

router.get('/', pcom_app_paracodeController.get);

module.exports = router;
