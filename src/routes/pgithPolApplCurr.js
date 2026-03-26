const express = require('express');
const router = express.Router();
const pgithPolApplCurrController = require('../controllers/pgithPolApplCurrController');

router.get('/', pgithPolApplCurrController.getAll);
router.post('/', pgithPolApplCurrController.create);
router.put('/:id', pgithPolApplCurrController.update);
router.delete('/:id', pgithPolApplCurrController.deleteItem);
router.get('/sysId', pgithPolApplCurrController.getByPolSysId);


module.exports = router;