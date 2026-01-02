const express = require('express');
const router = express.Router();
const polBrokerFieldController = require('../controllers/polBrokerFieldController');

router.get('/', polBrokerFieldController.get);


module.exports = router;
