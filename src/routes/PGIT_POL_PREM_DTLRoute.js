const express = require('express');
const router = express.Router();
const PGIT_POL_PREM_DTLController = require('../controllers/PGIT_POL_PREM_DTLController');

router.get('/ppdPolId', PGIT_POL_PREM_DTLController.getByPolSysId);

module.exports = router;  