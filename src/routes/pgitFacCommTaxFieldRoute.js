const express = require('express');
const router = express.Router();
const pgitFacCommTaxFieldController = require('../controllers/pgitFacCommTaxFieldController');

router.get('/', pgitFacCommTaxFieldController.get);


module.exports = router;
