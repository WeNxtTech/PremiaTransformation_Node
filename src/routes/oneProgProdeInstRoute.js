const express = require('express');
const router = express.Router();
const class_of_busController = require('../controllers/oneProgProdeInstController');

router.get('/', class_of_busController.getOne);

module.exports = router;
