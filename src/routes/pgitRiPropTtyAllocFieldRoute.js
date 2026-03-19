const express = require('express');
const router = express.Router();
const pgitRiPropTtyAllocControllerField = require('../controllers/pgitRiPropTtyAllocControllerField');

router.get('/', pgitRiPropTtyAllocControllerField.get);


module.exports = router;
