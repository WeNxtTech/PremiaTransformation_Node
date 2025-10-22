const express = require('express');
const router = express.Router();
const pgitPolSectionController = require('../controllers/pgitPolSectionController');

router.get('/', pgitPolSectionController.getAll);
router.post('/', pgitPolSectionController.create);
router.put('/:id', pgitPolSectionController.update);
router.delete('/:id', pgitPolSectionController.deleteItem);

module.exports = router;