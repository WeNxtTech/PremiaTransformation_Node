const express = require('express');
const router = express.Router();
const ${camelCase}Controller = require('../controllers/${camelCase}Controller');

router.get('/', ${camelCase}Controller.getAll);
router.post('/', ${camelCase}Controller.create);
router.put('/:id', ${camelCase}Controller.update);
router.delete('/:id', ${camelCase}Controller.deleteItem);

module.exports = router;