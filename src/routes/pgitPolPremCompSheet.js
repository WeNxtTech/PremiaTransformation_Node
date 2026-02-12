const express = require('express');
const router = express.Router();
const PGITPOLPREMCOMPSHEETController = require('../controllers/PGITPOLPREMCOMPSHEETController');

// router.get('/', PGITPOLPREMCOMPSHEETController.getAll);
// router.post('/', PGITPOLPREMCOMPSHEETController.create);
// router.put('/:id', PGITPOLPREMCOMPSHEETController.update);
// router.delete('/:id', PGITPOLPREMCOMPSHEETController.deleteItem);
router.get('/oneId', PGITPOLPREMCOMPSHEETController.getById);



module.exports = router;