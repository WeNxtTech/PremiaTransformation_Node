const express = require('express');
const router = express.Router();
const pgithPolDeductibleController = require('../controllers/pgithPolDeductibleController');

router.get('/', pgithPolDeductibleController.getAll);
router.post('/', pgithPolDeductibleController.create);
router.put('/:id', pgithPolDeductibleController.update);
router.delete('/:id', pgithPolDeductibleController.deleteItem);
router.get('/sysId', pgithPolDeductibleController.getByPolSysId);


module.exports = router;