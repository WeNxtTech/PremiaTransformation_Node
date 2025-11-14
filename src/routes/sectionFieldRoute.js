const express = require('express');
const router = express.Router();
const SectionFieldController = require('../controllers/SectionFieldController');

router.get('/', SectionFieldController.get);

module.exports = router;
