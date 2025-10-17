const express = require('express');
const router = express.Router();
const listOfInstanceController = require('../controllers/listOfInstanceController');

router.get('/', listOfInstanceController.getList);

module.exports = router;
