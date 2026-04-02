const express = require('express');
const router = express.Router();
const facPolDtlFieldController = require('../controllers/facPolDtlFieldController');

router.get('/', facPolDtlFieldController.get);


module.exports = router;
