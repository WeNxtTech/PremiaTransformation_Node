const express = require('express');
const router = express.Router();
const mainTemplateController = require('../controllers/mainTemplateController');

router.get('/', mainTemplateController.getMain);

module.exports = router;
