const express = require('express');
const router = express.Router();
const PGITPOLRISKSMIController = require('../controllers/PGITPOLRISKSMIController');

router.get('/', PGITPOLRISKSMIController.getAll);
router.post('/', PGITPOLRISKSMIController.create);
router.put('/:id', PGITPOLRISKSMIController.update);
router.delete('/:id', PGITPOLRISKSMIController.deleteItem);
router.get('/prsPolId', PGITPOLRISKSMIController.getByPolSysId);


module.exports = router;