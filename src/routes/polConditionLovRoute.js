const express = require('express');
const router = express.Router();
const polConditionLovController = require('../controllers/polConditionLovController');

router.get('/', polConditionLovController.get);


module.exports = router;
