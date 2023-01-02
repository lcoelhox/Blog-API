const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  console.log(name);

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const categoryCreate = await categoryService.createCategory(name);

  return res.status(201).json({ id: categoryCreate.id, name: categoryCreate.name });
};

const getUsersAll = async (req, res) => {
  const getAll = await categoryService.getAllUsers();

  return res.status(200).json(getAll);
};

module.exports = {
 createCategory,
 getUsersAll,
};
