const express = require('express');
const router = express.Router();
const motorController = require('../controllers/policyFieldsController');

router.get('/', motorController.getMotor);
router.post('/save', motorController.saveMotorData);


module.exports = router;
