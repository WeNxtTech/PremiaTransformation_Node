const express = require('express');
const router = express.Router();
const pcomAppParameterController = require('../controllers/pcomAppParameterController');

router.get('/', pcomAppParameterController.getAll);
router.post('/', pcomAppParameterController.create);
router.put('/:id', pcomAppParameterController.update);
router.delete('/:id', pcomAppParameterController.deleteItem);

module.exports = router;