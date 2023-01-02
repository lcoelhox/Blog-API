module.exports = (req, res, next) => {
  const bodyLogin = req.body;
  const { email, password } = bodyLogin;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};