const { Category } = require('../models');

const createCategory = async (name) => {
  const users = await Category.create({ name });
  return users;
};

const getAllUsers = async () => {
  const users = await Category.findAll();
  return users;
};

module.exports = {
  createCategory,
  getAllUsers,
};