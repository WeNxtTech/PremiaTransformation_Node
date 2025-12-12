const express = require('express');
const router = express.Router();
const riskSmiFieldController = require('../controllers/riskCoverLovController');

router.get('/', riskSmiFieldController.get);


module.exports = router;
