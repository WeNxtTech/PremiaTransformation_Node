const express = require('express');
const router = express.Router();
const riskSmiFieldController = require('../controllers/riskCoverFieldController');

router.get('/', riskSmiFieldController.get);


module.exports = router;
