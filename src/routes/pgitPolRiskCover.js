const express = require('express');
const router = express.Router();
const PGITPOLRISKCOVERController = require('../controllers/PGITPOLRISKCOVERController');

router.get('/', PGITPOLRISKCOVERController.getAll);
router.put('/:id', PGITPOLRISKCOVERController.update);
router.delete('/:id', PGITPOLRISKCOVERController.deleteItem);
router.get('/coverPolSysId', PGITPOLRISKCOVERController.getByPolSysId);
router.post('/', PGITPOLRISKCOVERController.save);




module.exports = router;