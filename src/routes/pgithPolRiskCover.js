const express = require('express');
const router = express.Router();
const pgithPolRiskCoverController = require('../controllers/pgithPolRiskCoverController');

router.get('/', pgithPolRiskCoverController.getAll);
router.post('/', pgithPolRiskCoverController.create);
router.put('/:id', pgithPolRiskCoverController.update);
router.delete('/:id', pgithPolRiskCoverController.deleteItem);
router.get('/sysId', pgithPolRiskCoverController.getByPolSysId);


module.exports = router;