const express = require('express');
const router = express.Router();
const pgitPolApplCurrController = require('../controllers/pgitPolApplCurrController');

router.get('/', pgitPolApplCurrController.getAll);
router.post('/', pgitPolApplCurrController.create);
router.put('/:id', pgitPolApplCurrController.update);
router.delete('/:id', pgitPolApplCurrController.deleteItem);

module.exports = router;