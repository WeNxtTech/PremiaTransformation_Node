const express = require('express');
const router = express.Router();
const pgitRiPropTtyDtlPgFieldController = require('../controllers/pgitRiPropTtyDtlPgFieldController');

router.get('/', pgitRiPropTtyDtlPgFieldController.get);


module.exports = router;
