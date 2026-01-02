const express = require('express');
const router = express.Router();
const polInstPremLovController = require('../controllers/polInstPremLovController');

router.get('/', polInstPremLovController.get);


module.exports = router;
