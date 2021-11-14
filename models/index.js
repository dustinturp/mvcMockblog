const BlogPost = require('./BlogPost');
const User = require('./User');

//associations

User.hasMany(BlogPost, {
    foreignKey: 'user_id'
});

BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = { User, BlogPost}