const express = require('express');
const router = express.Router();
const polHypoLovController = require('../controllers/polHypoLovController');

router.get('/', polHypoLovController.get);


module.exports = router;
