const express = require('express');
const router = express.Router();
const pcomCodesController = require('../controllers/pcomCodesController');

router.get('/', pcomCodesController.getAll);
router.post('/', pcomCodesController.create);
router.put('/:id', pcomCodesController.update);
router.delete('/:id', pcomCodesController.deleteItem);

module.exports = router;