const express = require("express");
const router = express.Router();

const simpleDropdownController = require("../controllers/simpleDropdownController");

router.get("/type", simpleDropdownController.getAcGenType);
router.get("/customer", simpleDropdownController.getCustomer);


module.exports = router;