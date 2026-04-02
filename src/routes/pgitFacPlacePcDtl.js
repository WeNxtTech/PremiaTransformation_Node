const express = require('express');
const router = express.Router();
const pgitFacPlacePcDtlController = require('../controllers/pgitFacPlacePcDtlController');

router.get('/', pgitFacPlacePcDtlController.getAll);
router.post('/', pgitFacPlacePcDtlController.create);
router.put('/:id', pgitFacPlacePcDtlController.update);
router.delete('/:id', pgitFacPlacePcDtlController.deleteItem);
router.get('/SysId', pgitFacPlacePcDtlController.getByPolSysId);

module.exports = router;