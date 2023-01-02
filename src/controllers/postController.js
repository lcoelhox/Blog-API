// const jwt = require('jsonwebtoken');
const postService = require('../services/postService');

const getAllPosts = async (_req, res) => {
  const posts = await postService.getAllPosts();

  return res.status(200).json(posts);
};

const getPostsById = async (req, res) => {
  const { id } = req.params;
  const postsId = await postService.getPostsById(id);

  if (!postsId) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  return res.status(200).json(postsId);
};

module.exports = {
  getAllPosts,
  getPostsById,
};