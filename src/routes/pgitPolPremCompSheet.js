const express = require('express');
const router = express.Router();
const pgitPolPremCompSheetController = require('../controllers/pgitPolPremCompSheetController');

router.get('/', pgitPolPremCompSheetController.getAll);
router.post('/', pgitPolPremCompSheetController.create);
router.put('/:id', pgitPolPremCompSheetController.update);
router.delete('/:id', pgitPolPremCompSheetController.deleteItem);

module.exports = router;