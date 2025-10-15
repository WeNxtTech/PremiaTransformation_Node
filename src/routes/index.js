const express = require("express");
const router = express.Router();
const lmCompanyRoutes=require('./lmCompanyRoutes');
const class_of_busRoute = require('./class_of_busRoute');
const motorRoute =require('./motorRoute');
const mainTemplateRoute = require("./mainTemplateRoute");
const instancePolicy_01Route = require("./instancePolicy_01Route");






router.use('/company',lmCompanyRoutes);
router.use('/businesses', class_of_busRoute);
// router.use('/businesses/motor/programs/PGIT6_01/instances/10-PD-01_01',motorRoute);
router.use('/motor',motorRoute);
router.use('/templates/policy/PGIT6_01',mainTemplateRoute);
router.use('/instance/policy/PGIT6_01',instancePolicy_01Route);

module.exports = router;
