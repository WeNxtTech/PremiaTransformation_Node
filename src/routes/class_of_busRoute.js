const express = require('express');
const router = express.Router();
const class_of_busController = require('../controllers/class_of_busController');

router.get('/', class_of_busController.getClassOfBus);

module.exports = router;
