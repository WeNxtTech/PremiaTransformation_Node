const express = require('express');
const router = express.Router();
const pgitPolRiskCoverController = require('../controllers/pgitPolRiskCoverController');

router.get('/', pgitPolRiskCoverController.getAll);
router.post('/', pgitPolRiskCoverController.create);
router.put('/:id', pgitPolRiskCoverController.update);
router.delete('/:id', pgitPolRiskCoverController.deleteItem);

module.exports = router;