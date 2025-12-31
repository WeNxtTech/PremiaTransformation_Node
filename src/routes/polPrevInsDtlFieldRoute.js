const express = require('express');
const router = express.Router();
const polPrevInsDtlFieldController = require('../controllers/polPrevInsDtlFieldController');

router.get('/', polPrevInsDtlFieldController.get);


module.exports = router;
