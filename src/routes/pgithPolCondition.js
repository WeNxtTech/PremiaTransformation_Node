const express = require('express');
const router = express.Router();
const pgithPolConditionController = require('../controllers/pgithPolConditionController');

router.get('/', pgithPolConditionController.getAll);
router.post('/', pgithPolConditionController.create);
router.put('/:id', pgithPolConditionController.update);
router.delete('/:id', pgithPolConditionController.deleteItem);
router.get('/sysId', pgithPolConditionController.getByPolSysId);

module.exports = router;