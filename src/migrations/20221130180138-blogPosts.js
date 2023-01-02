'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'user_id',
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('blog_posts')
  }
};
