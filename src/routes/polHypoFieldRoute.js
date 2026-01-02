const express = require('express');
const router = express.Router();
const polHypoFieldController = require('../controllers/polHypoFieldController');

router.get('/', polHypoFieldController.get);


module.exports = router;
