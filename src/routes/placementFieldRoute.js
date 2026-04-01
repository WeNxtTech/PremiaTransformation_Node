const express = require('express');
const router = express.Router();
const placementFieldController = require('../controllers/placementFieldController');

router.get('/', placementFieldController.get);


module.exports = router;
