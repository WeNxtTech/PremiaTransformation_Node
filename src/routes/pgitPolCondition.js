const express = require('express');
const router = express.Router();
const pgitPolConditionController = require('../controllers/pgitPolConditionController');

router.get('/', pgitPolConditionController.getAll);
router.post('/', pgitPolConditionController.save);
router.put('/:id', pgitPolConditionController.update);
router.delete('/:id', pgitPolConditionController.deleteItem);
router.get('/pconPolId', pgitPolConditionController.getByPolSysId);


module.exports = router;