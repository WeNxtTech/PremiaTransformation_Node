const express = require('express');
const router = express.Router();
const pgitFacPlaceShareController = require('../controllers/pgitFacPlaceShareController');

router.get('/', pgitFacPlaceShareController.getAll);
router.post('/', pgitFacPlaceShareController.create);
router.put('/:id', pgitFacPlaceShareController.update);
router.delete('/:id', pgitFacPlaceShareController.deleteItem);
router.get('/fpsFoSysId', pgitFacPlaceShareController.getByPolSysId);

module.exports = router;