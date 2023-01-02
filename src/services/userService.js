const { User } = require('../models');

const getEmailUser = async (email) => {
  const emailUser = await User.findOne({ where: { email } });
  // console.log(emailUser);
  return emailUser;
};

const createUser = async (body) => {
  const { displayName, email, password, image } = body;
  const users = await User.create({ displayName, email, password, image });
  return users;
};
// console.log(createUser);

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getUserId = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  return user;
};

module.exports = {
  getEmailUser,
  createUser,
  getAllUsers,
  getUserId,
};