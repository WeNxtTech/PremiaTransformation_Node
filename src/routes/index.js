const express = require("express");
const pgitPolicyRouter = require('./pgitPolicy');
const pgitPolSectionRouter = require('./pgitPolSection');
const PGITPOLRISKADDLINFORouter = require('./PGITPOLRISKADDLINFO');
const pgitPolRiskCoverRouter = require('./pgitPolRiskCover');
const PGITPOLDEDUCTIBLERouter = require('./PGITPOLDEDUCTIBLE');
const pgitPolConditionRouter = require('./pgitPolCondition');
const pgitPolBrokerRouter = require('./pgitPolBroker');
const pgitTaxDtlRouter = require('./pgitTaxDtl');
const pgitPolChargeRouter = require('./pgitPolCharge');
const pgitPolApplCurrRouter = require('./pgitPolApplCurr');
const pgitPolInstPremRouter = require('./pgitPolInstPrem');
const pgitPolPremCompSheetRouter = require('./pgitPolPremCompSheet');
const pgitAcntDocRouter = require('./pgitAcntDoc');
const pcomCodesRouter = require('./pcomCodes');
const pcomAppParameterRouter = require('./pcomAppParameter');
const router = express.Router();
const lmCompanyRoutes=require('./lmCompanyRoutes');
const class_of_busRoute = require('./class_of_busRoute');
const policyFields =require('./policyFieldsRoute');
const mainTemplateRoute = require("./mainTemplateRoute");
const instancePolicy_01Route = require("./policyInstancesRoute");
const polOneInstCode = require("./policyOneInstCodeRoute");
const oneProgProdInst = require("./oneProgProdeInstRoute");
const listOfInst = require('./listOfInstanceRoute');
const policyLov = require('./policyLovRoute');
const secForOneProd = require('./secForOneProdRoute');
const pcom_codes = require('./pcom_codes_pctypeRoute');
const pcom_app = require('./pcom_app_paracodeRoute');
const riskLov = require('./riskLovRoute');
const riskField = require('./riskFieldRoute');
const sectionfields = require('./sectionFieldRoute');
const modernDropDown = require('./modernDropDownRoute');
const dropDown = require('./dropdownRoute');
const riskSmi = require('./riskSmiFieldRoute');
const riskSmiLovFieldRoute = require('./riskSmiLovFieldRoute');
const pgit_pol_risk_cover = require('./pgitPolRiskCover');
const pgit_pol_risk_smi = require('./PGITPOLRISKSMI');
const riskCoverFieldRoute = require('./riskCoverFieldRoute');
const riskCoverLovRoute = require('./riskCoverLovRoute');
const riskDiscountFieldRoute = require('./riskDiscountFieldRoute');
const riskDiscountLov = require('./riskDiscountLovRoute');
const riskDeductible = require('./riskDeductibleFieldRoute');
const riskDeductibleLov = require('./riskDeductibleLovRoute');
const dsCode = require('./ds_codeRoute');





//////////////////////////////////////////////////////////////////////////////////////////////////




router.use('/company',lmCompanyRoutes);
router.use('/businesses', class_of_busRoute);
// router.use('/businesses/motor/programs/PGIT6_01/instances/10-PD-01_01',motorRoute);
router.use('/policyFields',policyFields);
router.use('/templates/policy',mainTemplateRoute);
router.use('/policy/instance',instancePolicy_01Route);
router.use('/policy/instanceCode',polOneInstCode);
router.use('/program/product/instance',oneProgProdInst);
router.use('/listOfInst',listOfInst);
router.use('/pgitPolicy', pgitPolicyRouter);
router.use('/pgitPolSection', pgitPolSectionRouter);
router.use('/risk', PGITPOLRISKADDLINFORouter);
router.use('/pgitPolRiskCover', pgitPolRiskCoverRouter);
router.use('/PGITPOLDEDUCTIBLE', PGITPOLDEDUCTIBLERouter);
router.use('/pgitPolCondition', pgitPolConditionRouter);
router.use('/pgitPolBroker', pgitPolBrokerRouter);
router.use('/pgitTaxDtl', pgitTaxDtlRouter);
router.use('/pgitPolCharge', pgitPolChargeRouter);
router.use('/pgitPolApplCurr', pgitPolApplCurrRouter);
router.use('/pgitPolInstPrem', pgitPolInstPremRouter);
router.use('/pgitPolPremCompSheet', pgitPolPremCompSheetRouter);
router.use('/pgitAcntDoc', pgitAcntDocRouter);
router.use('/policyLov',policyLov);
router.use('/secForOneProd',secForOneProd);
router.use('/lovspc',pcom_codes);
router.use('/lovpara',pcom_app);
router.use('/riskLov',riskLov);
router.use('/riskField',riskField);
router.use('/sectionField',sectionfields);
router.use('/modernDropDown',modernDropDown);
router.use('/dropDown',dropDown);
router.use('/riskSmi', riskSmi);
router.use('/riskSmiLovField', riskSmiLovFieldRoute);
router.use('/riskCover', riskCoverFieldRoute);
router.use('/riskCoverLov', riskCoverLovRoute);
router.use('/pcomCodes', pcomCodesRouter);
router.use('/pcomAppParameter', pcomAppParameterRouter);
router.use('/pgitPolRiskCover', pgit_pol_risk_cover);
router.use('/pgitPolRiskSmi', pgit_pol_risk_smi);
router.use('/riskDiscountField', riskDiscountFieldRoute);
router.use('/riskDiscountLov', riskDiscountLov);
router.use('/riskDeductibleField', riskDeductible);
router.use('/riskDeductibleLov', riskDeductibleLov);
router.use('/dsCode',dsCode);







module.exports = router;
