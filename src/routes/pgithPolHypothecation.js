const express = require('express');
const router = express.Router();
const pgithPolHypothecationController = require('../controllers/pgithPolHypothecationController');

router.get('/', pgithPolHypothecationController.getAll);
router.post('/', pgithPolHypothecationController.create);
router.put('/:id', pgithPolHypothecationController.update);
router.delete('/:id', pgithPolHypothecationController.deleteItem);
router.get('/sysId', pgithPolHypothecationController.getByPolSysId);


module.exports = router;