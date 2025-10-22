const express = require('express');
const router = express.Router();
const pgitTaxDtlController = require('../controllers/pgitTaxDtlController');

router.get('/', pgitTaxDtlController.getAll);
router.post('/', pgitTaxDtlController.create);
router.put('/:id', pgitTaxDtlController.update);
router.delete('/:id', pgitTaxDtlController.deleteItem);

module.exports = router;