const express = require('express');
const router = express.Router();
const pgitPolChargeController = require('../controllers/pgitPolChargeController');

router.get('/', pgitPolChargeController.getAll);
router.post('/', pgitPolChargeController.create);
router.put('/:id', pgitPolChargeController.update);
router.delete('/:id', pgitPolChargeController.deleteItem);

module.exports = router;