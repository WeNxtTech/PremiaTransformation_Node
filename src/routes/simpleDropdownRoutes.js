const express = require("express");
const router = express.Router();

const simpleDropdownController = require("../controllers/simpleDropdownController");

router.get("/type", simpleDropdownController.getAcGenType);

module.exports = router;