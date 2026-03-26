const express = require('express');
const router = express.Router();
const pgithPolicyController = require('../controllers/pgithPolicyController');

router.get('/', pgithPolicyController.getAll);
router.post('/', pgithPolicyController.create);
router.put('/:id', pgithPolicyController.update);
router.delete('/:id', pgithPolicyController.deleteItem);
router.get('/sysId', pgithPolicyController.getByPolSysId);


module.exports = router;