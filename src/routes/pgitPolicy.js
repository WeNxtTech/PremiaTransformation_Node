const express = require('express');
const router = express.Router();
const pgitPolicyController = require('../controllers/pgitPolicyController');

router.get('/', pgitPolicyController.getAll);
// router.post('/', pgitPolicyController.create);
// router.post('/update', pgitPolicyController.update);
router.delete('/:id', pgitPolicyController.deleteItem);
router.get('/oneId', pgitPolicyController.getById);
router.get('/status', pgitPolicyController.getStatus);
router.post('/',pgitPolicyController.createOrUpdate);


module.exports = router;