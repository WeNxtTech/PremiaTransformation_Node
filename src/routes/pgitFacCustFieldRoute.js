const express = require('express');
const router = express.Router();
const pgitFacCustFieldController = require('../controllers/pgitFacCustFieldController');

router.get('/', pgitFacCustFieldController.get);


module.exports = router;
