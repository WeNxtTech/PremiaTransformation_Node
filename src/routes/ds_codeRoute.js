const express = require('express');
const router = express.Router();
const ds_codeController = require('../controllers/ds_codeController');

router.get('/', ds_codeController.get);


module.exports = router;
