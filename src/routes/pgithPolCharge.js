const express = require('express');
const router = express.Router();
const pgithPolChargeController = require('../controllers/pgithPolChargeController');

router.get('/', pgithPolChargeController.getAll);
router.post('/', pgithPolChargeController.create);
router.put('/:id', pgithPolChargeController.update);
router.delete('/:id', pgithPolChargeController.deleteItem);
router.get('/sysId', pgithPolChargeController.getByPolSysId);

module.exports = router;