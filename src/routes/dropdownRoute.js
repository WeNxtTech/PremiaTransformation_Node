const express = require('express');
const router = express.Router();
const dropdownController = require('../controllers/dropdownController');

router.post('/', dropdownController.getDropdowns);

module.exports = router;
