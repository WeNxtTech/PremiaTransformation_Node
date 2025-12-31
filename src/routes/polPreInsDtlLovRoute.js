const express = require('express');
const router = express.Router();
const polPreInsDtlLovController = require('../controllers/polPreInsDtlLovController');

router.get('/', polPreInsDtlLovController.get);


module.exports = router;
