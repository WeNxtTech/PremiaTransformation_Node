const { getList } = require('../services/listOfInstanceService');

exports.getList = async (req, res) => {
  try {
    const data = await getList();
    res.json(data);
  } catch (error) {
    console.error('Controller error:', error);
    res.status(500).json({ error: 'Failed to fetch class_of_bus data' });
  }
};
