const express = require('express');
const userControler = require('../controllers/userController');
const validateLogin = require('../middlewares/validateLogin');

const router = express.Router();

router.post('/', validateLogin, userControler.loginUserEmail);

module.exports = router;