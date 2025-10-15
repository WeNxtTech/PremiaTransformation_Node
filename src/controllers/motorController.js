const { getMotor } = require('../services/motorService');

// exports.getMotor = async (req, res) => {
//   try {
//     const data = await getMotor();
//     res.json(data);
//   } catch (error) {
//     console.error('Controller error:', error);
//     res.status(500).json({ error: 'Failed to fetch class_of_bus data' });
//   }
// };



exports.getMotor = async (req, res) => {
  try {
    const { prodCode, instCode, busType } = req.query;
    const data = await getMotor(prodCode, instCode, busType);
    res.json(data);
  } catch (error) {
    console.error('Controller error:', error);
    res.status(500).json({ error: 'Failed to fetch class_of_bus data' });
  }
};
