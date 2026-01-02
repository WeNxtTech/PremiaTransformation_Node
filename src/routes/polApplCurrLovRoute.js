const express = require('express');
const router = express.Router();
const polApplCurrLovController = require('../controllers/polApplCurrLovController');

router.get('/', polApplCurrLovController.get);


module.exports = router;
