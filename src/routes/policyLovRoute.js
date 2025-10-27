const express = require('express');
const router = express.Router();
const policyLovController = require('../controllers/policyLovController');

router.get('/', policyLovController.getLov);

module.exports = router;
