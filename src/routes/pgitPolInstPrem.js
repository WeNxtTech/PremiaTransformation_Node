const express = require('express');
const router = express.Router();
const pgitPolInstPremController = require('../controllers/pgitPolInstPremController');

router.get('/', pgitPolInstPremController.getAll);
router.post('/', pgitPolInstPremController.create);
router.put('/:id', pgitPolInstPremController.update);
router.delete('/:id', pgitPolInstPremController.deleteItem);

module.exports = router;