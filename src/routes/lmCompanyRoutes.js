const express = require('express');
const router = express.Router();
const LMCompanyController = require('../lm_company/lmCompanyController');

router.get('/', LMCompanyController.get);
router.post('/', LMCompanyController.create);
router.put('/:COMP_CODE', LMCompanyController.update);
router.delete('/:COMP_CODE', LMCompanyController.delete);


module.exports = router;
