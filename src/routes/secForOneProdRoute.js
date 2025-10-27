const express = require('express');
const router = express.Router();
const secForOneProdController = require('../controllers/secForOneProdController');

router.get('/', secForOneProdController.getSecLov);

module.exports = router;
