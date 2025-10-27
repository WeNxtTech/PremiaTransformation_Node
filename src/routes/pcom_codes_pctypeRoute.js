const express = require('express');
const router = express.Router();
const pcom_codes_pctypeController = require('../controllers/pcom_codes_pctypeController');

router.get('/', pcom_codes_pctypeController.get);

module.exports = router;
