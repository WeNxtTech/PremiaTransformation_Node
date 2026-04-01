const express = require('express');
const router = express.Router();
const facShareDtlFieldController = require('../controllers/facShareDtlFieldController'  );

router.get('/', facShareDtlFieldController.get);


module.exports = router;
