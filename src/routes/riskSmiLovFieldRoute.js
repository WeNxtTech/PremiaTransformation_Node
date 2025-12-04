const express = require('express');
const router = express.Router();
const riskSmiFieldController = require('../controllers/riskSmiLovFieldController');

router.get('/', riskSmiFieldController.get);


module.exports = router;
