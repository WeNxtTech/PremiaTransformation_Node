const express = require('express');
const router = express.Router();
const screenSetupController = require('../controllers/screenSetupController');

router.get('/', screenSetupController.get);


module.exports = router;
