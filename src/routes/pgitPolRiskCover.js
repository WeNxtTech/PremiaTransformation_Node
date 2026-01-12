const express = require('express');
const router = express.Router();
const PGITPOLRISKCOVERController = require('../controllers/PGITPOLRISKCOVERController');

router.get('/', PGITPOLRISKCOVERController.getAll);
router.post('/', PGITPOLRISKCOVERController.create);
router.put('/:id', PGITPOLRISKCOVERController.update);
router.delete('/:id', PGITPOLRISKCOVERController.deleteItem);
router.get('/coverPolSysId', PGITPOLRISKCOVERController.getByPolSysId);



module.exports = router;