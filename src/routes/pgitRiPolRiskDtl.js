const express = require('express');
const router = express.Router();
const pgitRiPolRiskDtlController = require('../controllers/pgitRiPolRiskDtlController');

router.get('/', pgitRiPolRiskDtlController.getAll);
router.post('/', pgitRiPolRiskDtlController.create);
router.put('/:id', pgitRiPolRiskDtlController.update);
router.delete('/:id', pgitRiPolRiskDtlController.deleteItem);
router.get('/rprdSysId', pgitRiPolRiskDtlController.getByPolSysId);


module.exports = router;