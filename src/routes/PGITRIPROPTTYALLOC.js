const express = require('express');
const router = express.Router();
const PGITRIPROPTTYALLOCController = require('../controllers/PGITRIPROPTTYALLOCController');

router.get('/', PGITRIPROPTTYALLOCController.getAll);
router.post('/', PGITRIPROPTTYALLOCController.create);
router.put('/:id', PGITRIPROPTTYALLOCController.update);
router.delete('/:id', PGITRIPROPTTYALLOCController.deleteItem);
router.get('/',PGITRIPROPTTYALLOCController.getByPolSysId);

module.exports = router;