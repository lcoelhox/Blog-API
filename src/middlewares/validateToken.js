require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'coelhos';

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  try {
    const valid = jwt.verify(authorization, secret);
    req.user = valid;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

// module.exports = {
//   validateToken,
// };