const express = require('express');
const router = express.Router();
const class_of_busController = require('../controllers/policyOneInstCodeController');

router.get('/', class_of_busController.getOneInst);

module.exports = router;
