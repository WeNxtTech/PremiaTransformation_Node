const express = require('express');
const router = express.Router();
const PGITPOLINSTCHARGEController = require('../controllers/PGITPOLINSTCHARGEController');

router.get('/', PGITPOLINSTCHARGEController.getAll);
router.post('/', PGITPOLINSTCHARGEController.create);
router.put('/:id', PGITPOLINSTCHARGEController.update);
router.delete('/:id', PGITPOLINSTCHARGEController.deleteItem);
router.get("/instChargePolId", PGITPOLINSTCHARGEController.getByPolSysId);
module.exports = router;