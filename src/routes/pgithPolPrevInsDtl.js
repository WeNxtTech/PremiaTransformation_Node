const express = require('express');
const router = express.Router();
const pgithPolPrevInsDtlController = require('../controllers/pgithPolPrevInsDtlController');

router.get('/', pgithPolPrevInsDtlController.getAll);
router.post('/', pgithPolPrevInsDtlController.create);
router.put('/:id', pgithPolPrevInsDtlController.update);
router.delete('/:id', pgithPolPrevInsDtlController.deleteItem);
router.get('/sysId', pgithPolPrevInsDtlController.getByPolSysId);

module.exports = router;