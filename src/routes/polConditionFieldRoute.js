const express = require('express');
const router = express.Router();
const polConditionFieldController = require('../controllers/polConditionFieldController');

router.get('/', polConditionFieldController.get);


module.exports = router;
