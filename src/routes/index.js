const express = require("express");
const router = express.Router();
const lmCompanyRoutes=require('./lmCompanyRoutes');
const class_of_busRoute = require('./class_of_busRoute');
const motorRoute =require('./motorRoute');







router.use('/company',lmCompanyRoutes);
router.use('/businesses', class_of_busRoute);
router.use('/businesses/motor/programs/PGIT6_01/instances/10-PD-01_01',motorRoute);



module.exports = router;
