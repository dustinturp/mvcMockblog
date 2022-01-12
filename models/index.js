const BlogPost = require('./BlogPost');
const User = require('./User');
const Comment = require('./Comment');

//associations

User.hasMany(BlogPost, {
    foreignKey: 'user_id'
});

BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = { User, BlogPost}