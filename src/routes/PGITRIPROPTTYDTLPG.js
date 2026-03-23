const express = require('express');
const router = express.Router();
const PGITRIPROPTTYDTLPGController = require('../controllers/PGITRIPROPTTYDTLPGController');

router.get('/', PGITRIPROPTTYDTLPGController.getAll);
router.post('/', PGITRIPROPTTYDTLPGController.create);
router.put('/:id', PGITRIPROPTTYDTLPGController.update);
router.delete('/:id', PGITRIPROPTTYDTLPGController.deleteItem);
router.get('/byId',PGITRIPROPTTYDTLPGController.getById);


module.exports = router;