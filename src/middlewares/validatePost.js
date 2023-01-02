const categoryService = require('../services/categoryService');

const validateFileds = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  // console.log(title, content, categoryIds);
  if (!title || !content || categoryIds.length === 0) {
    // console.log(title, content, categoryIds);
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  return next();
};

const validateCategoryId = async (req, res, next) => {
  const { categoryIds } = req.body;
  
  const allCategories = await categoryService.getAllUsers();
  const mapIds = allCategories.map(({ id }) => id);

  if (!categoryIds.every((id) => mapIds.includes(id))) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  return next();
};

module.exports = {
  validateFileds,
  validateCategoryId,
};