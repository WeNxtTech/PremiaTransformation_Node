const express = require('express');
const router = express.Router();
const pgitRiInterfaceController = require('../controllers/pgitRiInterfaceFieldController');

router.get('/', pgitRiInterfaceController.get);


module.exports = router;
