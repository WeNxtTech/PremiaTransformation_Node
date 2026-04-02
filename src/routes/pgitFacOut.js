const express = require('express');
const router = express.Router();
const pgitFacOutController = require('../controllers/pgitFacOutController');

router.get('/', pgitFacOutController.getAll);
router.post('/', pgitFacOutController.create);
router.put('/:id', pgitFacOutController.update);
router.delete('/:id', pgitFacOutController.deleteItem);
router.get('/foSysId', pgitFacOutController.getByPolSysId);


module.exports = router;