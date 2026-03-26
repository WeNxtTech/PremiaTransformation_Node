const express = require('express');
const router = express.Router();
const pgithPolSectionController = require('../controllers/pgithPolSectionController');

// router.get('/', pgithPolSectionController.getAll);
// router.post('/', pgithPolSectionController.create);
// router.put('/:id', pgithPolSectionController.update);
// router.delete('/:id', pgithPolSectionController.deleteItem);
router.get('/sysId', pgithPolSectionController.getByPolSysId);


module.exports = router;