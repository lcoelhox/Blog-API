const userService = require('../services/userService');

const validateDisplayName = async (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({
       message: '"displayName" length must be at least 8 characters long',
      });
  }
  return next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const regexEmail = /^\w+@\D+.\D+$/;
  if (!regexEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  return next();
};

const validatePassword = async (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400).json({ 
      message: '"password" length must be at least 6 characters long',
    });
  }
  return next();
};

const validateEmailExist = async (req, res, next) => {
  const { email } = req.body;
    const emailUser = await userService.getEmailUser(email);
    if (emailUser) {
      return res.status(409).json({ message: 'User already registered' });
    }
    return next();
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateEmailExist,
};