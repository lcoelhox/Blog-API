const express = require('express');
const userControler = require('../controllers/userController');
const validateUser = require('../middlewares/validateUser');
const validToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/',
  validateUser.validateDisplayName,
  validateUser.validateEmail,
  validateUser.validatePassword,
  validateUser.validateEmailExist,
  userControler.createUser);

router.get('/', validToken, userControler.getUsersAll);

router.get('/:id', validToken, userControler.getUserById);

module.exports = router;