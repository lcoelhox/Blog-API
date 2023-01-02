module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories', 
  })

  Post.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, { foreignKey: 'categoryId', as: 'blog', otherKey: 'postId', through: Post })
    models.BlogPost.belongsToMany(models.Category, { foreignKey: 'postId', as: 'categories', otherKey: 'categoryId', through: Post })
  } 

  return Post
}