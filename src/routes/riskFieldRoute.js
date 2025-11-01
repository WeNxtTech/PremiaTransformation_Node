const express = require('express');
const router = express.Router();
const riskFieldController = require('../controllers/riskFieldController');

router.get('/', riskFieldController.get);

module.exports = router;
