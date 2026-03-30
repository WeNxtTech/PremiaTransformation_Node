const express = require('express');
const router = express.Router();
const pgithPolBrokerController = require('../controllers/pgithPolBrokerController');

router.get('/', pgithPolBrokerController.getAll);
router.post('/', pgithPolBrokerController.create);
router.put('/:id', pgithPolBrokerController.update);
router.delete('/:id', pgithPolBrokerController.deleteItem);
router.get('/sysId', pgithPolBrokerController.getByPolSysId);

module.exports = router;