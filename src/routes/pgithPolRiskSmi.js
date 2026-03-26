const express = require('express');
const router = express.Router();
const pgithPolRiskSmiController = require('../controllers/pgithPolRiskSmiController');

router.get('/', pgithPolRiskSmiController.getAll);
router.post('/', pgithPolRiskSmiController.create);
router.put('/:id', pgithPolRiskSmiController.update);
router.delete('/:id', pgithPolRiskSmiController.deleteItem);
router.get('/sysId', pgithPolRiskSmiController.getByPolSysId);


module.exports = router;