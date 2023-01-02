const express = require('express');
const postController = require('../controllers/postController');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.get('/', validateToken, postController.getAllPosts);
router.get('/:id', validateToken, postController.getPostsById);
module.exports = router;