const express = require('express');
const router = express.Router();
const riskSmiFieldController = require('../controllers/riskSmiFieldController');

router.get('/', riskSmiFieldController.get);


module.exports = router;
