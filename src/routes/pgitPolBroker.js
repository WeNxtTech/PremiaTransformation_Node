const express = require('express');
const router = express.Router();
const pgitPolBrokerController = require('../controllers/pgitPolBrokerController');

router.get('/', pgitPolBrokerController.getAll);
router.post('/', pgitPolBrokerController.save);
router.put('/:id', pgitPolBrokerController.update);
router.delete('/:id', pgitPolBrokerController.deleteItem);
router.get('/pbrkPolId', pgitPolBrokerController.getByPolSysId);


module.exports = router;