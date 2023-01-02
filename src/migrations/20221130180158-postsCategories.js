'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('posts_categories', {
      postId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'post_id',
      },
      categoryId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'category_id',
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('posts_categories')
  }
};
