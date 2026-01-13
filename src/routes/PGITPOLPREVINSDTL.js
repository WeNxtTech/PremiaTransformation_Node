const express = require('express');
const router = express.Router();
const PGITPOLPREVINSDTLController = require('../controllers/PGITPOLPREVINSDTLController');

router.get('/', PGITPOLPREVINSDTLController.getAll);
router.post('/', PGITPOLPREVINSDTLController.create);
router.put('/:id', PGITPOLPREVINSDTLController.update);
router.delete('/:id', PGITPOLPREVINSDTLController.deleteItem);

module.exports = router;