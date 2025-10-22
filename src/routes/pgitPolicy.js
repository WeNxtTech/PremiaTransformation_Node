const express = require('express');
const router = express.Router();
const pgitPolicyController = require('../controllers/pgitPolicyController');

router.get('/', pgitPolicyController.getAll);
router.post('/', pgitPolicyController.create);
router.put('/:id', pgitPolicyController.update);
router.delete('/:id', pgitPolicyController.deleteItem);

module.exports = router;