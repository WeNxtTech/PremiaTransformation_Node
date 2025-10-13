const express = require('express');
const router = express.Router();
const class_of_busController = require('../controllers/motorController');

router.get('/', class_of_busController.getMotor);

module.exports = router;
