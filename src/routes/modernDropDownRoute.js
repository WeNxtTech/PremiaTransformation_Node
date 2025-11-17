const express = require('express');
const router = express.Router();
const modernDropDownController = require('../controllers/modernDropDownController');

router.get('/customer', modernDropDownController.getCustomer);
router.get('/insured', modernDropDownController.getInsured);
router.get('/sourcecode', modernDropDownController.getSrcCode);
router.get('/currency', modernDropDownController.getCurrency);



module.exports = router;
