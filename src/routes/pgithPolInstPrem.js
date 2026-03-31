const express = require('express');
const router = express.Router();
const pgithPolInstPremController = require('../controllers/pgithPolInstPremController');

router.get('/', pgithPolInstPremController.getAll);
router.post('/', pgithPolInstPremController.create);
router.put('/:id', pgithPolInstPremController.update);
router.delete('/:id', pgithPolInstPremController.deleteItem);
router.get('/sysId', pgithPolInstPremController.getByPolSysId);


module.exports = router;