const express = require("express");
const router = express.Router();
const lmCompanyRoutes=require('./lmCompanyRoutes');
const class_of_busRoute = require('./class_of_busRoute');
const motorRoute =require('./motorRoute');
const mainTemplateRoute = require("./mainTemplateRoute");
const instancePolicy_01Route = require("./policyInstancesRoute");
const polOneInstCode = require("./policyOneInstCodeRoute");





router.use('/company',lmCompanyRoutes);
router.use('/businesses', class_of_busRoute);
// router.use('/businesses/motor/programs/PGIT6_01/instances/10-PD-01_01',motorRoute);
router.use('/motor',motorRoute);
router.use('/templates/policy',mainTemplateRoute);
router.use('/policy/instance',instancePolicy_01Route);
router.use('/policy/instanceCode',polOneInstCode)
module.exports = router;
