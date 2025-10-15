const express = require('express');
const router = express.Router();
const instancePolicy_01Controller = require('../controllers/instancePolicy_01Controller');

router.get('/', instancePolicy_01Controller.getInstPol);

module.exports = router;
