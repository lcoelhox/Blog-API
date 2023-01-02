const express = require('express');
const categoryControler = require('../controllers/categoryController');
const validToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validToken, categoryControler.createCategory);

router.get('/', validToken, categoryControler.getUsersAll);

module.exports = router;