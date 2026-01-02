const express = require('express');
const router = express.Router();
const polApplCurrFieldController = require('../controllers/polApplCurrFieldController');

router.get('/', polApplCurrFieldController.get);


module.exports = router;
