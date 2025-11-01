const { get } = require('../services/riskFieldService');

exports.get = async (req, res) => {
  try {
    const data = await get();
    res.json(data);
  } catch (error) {
    console.error('Controller error:', error);
    res.status(500).json({ error: 'Failed to fetch Risk Field' });
  }
};
