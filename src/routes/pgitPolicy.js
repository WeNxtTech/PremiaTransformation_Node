const express = require('express');
const router = express.Router();
const pgitPolicyController = require('../controllers/pgitPolicyController');

router.get('/', pgitPolicyController.getAll);
router.post('/', pgitPolicyController.create);
router.put('/:id', pgitPolicyController.update);
router.delete('/:id', pgitPolicyController.deleteItem);
router.get('/:id', pgitPolicyController.getById);

module.exports = router;