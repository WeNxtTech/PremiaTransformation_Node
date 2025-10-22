const express = require('express');
const router = express.Router();
const pgitAcntDocController = require('../controllers/pgitAcntDocController');

router.get('/', pgitAcntDocController.getAll);
router.post('/', pgitAcntDocController.create);
router.put('/:id', pgitAcntDocController.update);
router.delete('/:id', pgitAcntDocController.deleteItem);

module.exports = router;