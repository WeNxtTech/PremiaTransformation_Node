const express = require('express');
const router = express.Router();
const { Amount } = require('../controllers/GET_EXCH_RATEController');

router.get('/', Amount);

module.exports = router;
