const express = require('express');
const router = express.Router();
const polInstPremFieldController = require('../controllers/polInstPremFieldController');

router.get('/', polInstPremFieldController.get);


module.exports = router;
