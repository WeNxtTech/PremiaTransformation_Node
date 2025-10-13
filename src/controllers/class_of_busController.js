const { getClassOfBus } = require('../services/class_of_busService');

exports.getClassOfBus = async (req, res) => {
  try {
    const data = await getClassOfBus();
    res.json(data);
  } catch (error) {
    console.error('Controller error:', error);
    res.status(500).json({ error: 'Failed to fetch class_of_bus data' });
  }
};
