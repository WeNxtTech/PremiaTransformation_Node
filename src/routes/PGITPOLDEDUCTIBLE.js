const express = require('express');
const router = express.Router();
const PGITPOLDEDUCTIBLEController = require('../controllers/PGITPOLDEDUCTIBLEController');

router.get('/', PGITPOLDEDUCTIBLEController.getAll);
router.post('/', PGITPOLDEDUCTIBLEController.save);
router.put('/:id', PGITPOLDEDUCTIBLEController.update);
router.delete('/:id', PGITPOLDEDUCTIBLEController.deleteItem);
router.get('/dedPolId', PGITPOLDEDUCTIBLEController.getByPolSysId);



module.exports = router;