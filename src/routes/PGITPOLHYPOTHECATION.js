const express = require('express');
const router = express.Router();
const PGITPOLHYPOTHECATIONController = require('../controllers/PGITPOLHYPOTHECATIONController');

router.get('/', PGITPOLHYPOTHECATIONController.getAll);
router.post('/', PGITPOLHYPOTHECATIONController.create);
router.put('/:id', PGITPOLHYPOTHECATIONController.update);
router.delete('/:id', PGITPOLHYPOTHECATIONController.deleteItem);
router.get('/phpoPolId', PGITPOLHYPOTHECATIONController.getByPolSysId);

module.exports = router;