const express = require('express');
const router = express.Router();
const facPlacementFieldController = require('../controllers/facPlacementFieldController');

router.get('/', facPlacementFieldController.get);


module.exports = router;
