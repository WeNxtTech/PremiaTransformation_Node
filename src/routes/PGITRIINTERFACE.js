const express = require('express');
const router = express.Router();
const PGITRIINTERFACEController = require('../controllers/PGITRIINTERFACEController');

router.get('/', PGITRIINTERFACEController.getAll);
router.post('/', PGITRIINTERFACEController.create);
router.put('/:id', PGITRIINTERFACEController.update);
router.delete('/:id', PGITRIINTERFACEController.deleteItem);
router.get('/',PGITRIINTERFACEController.getByPolSysId);

module.exports = router;