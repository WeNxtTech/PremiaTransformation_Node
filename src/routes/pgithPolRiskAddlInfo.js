const express = require('express');
const router = express.Router();
const pgithPolRiskAddlInfoController = require('../controllers/pgithPolRiskAddlInfoController');

// router.get('/', pgithPolRiskAddlInfoController.getAll);
// router.post('/', pgithPolRiskAddlInfoController.create);
// router.put('/:id', pgithPolRiskAddlInfoController.update);
// router.delete('/:id', pgithPolRiskAddlInfoController.deleteItem);
router.get('/sysId', pgithPolRiskAddlInfoController.getByPolSysId);


module.exports = router;