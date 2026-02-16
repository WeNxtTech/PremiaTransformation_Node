const express = require('express');
const router = express.Router();
const { Approval } = require('../controllers/POL_APPR_VALController');

router.get('/', Approval);

module.exports = router;
