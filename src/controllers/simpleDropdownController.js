const simpleDropdownService = require("../services/simpleDropdownService");

exports.getAcGenType = async (req, res, next) => {
  try {

    const result = await simpleDropdownService.getAcGenType();

    return res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: result
    });

  } catch (err) {
    next(err);
  }
};