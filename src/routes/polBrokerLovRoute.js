const express = require('express');
const router = express.Router();
const polBrokerLovController = require('../controllers/polBrokerLovController');

router.get('/', polBrokerLovController.get);


module.exports = router;
