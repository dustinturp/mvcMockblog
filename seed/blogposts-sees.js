const { BlogPost } = require('../models');

const blogpostdata = [
    {
        title: 'Blog post one',
        post_url: 'https://nasa.gov/',
        user_id: '1'
    },
    {
        title: 'Blog post 2',
        post_url: 'https://nasa.gov/',
        user_id: '1'
    },
    {
        title: 'Blog post 3',
        post_url: 'https://nasa.gov/',
        user_id: '1'
    },
    {
        title: 'Blog post 4',
        post_url: 'https://nasa.gov/',
        user_id: '1'
    },
    {
        title: 'Blog post5',
        post_url: 'https://nasa.gov/',
        user_id: '1'
    },
    {
        title: 'Blog post 6',
        post_url: 'https://nasa.gov/',
        user_id: '1'
    },
    {
        title: 'Blog post 7',
        post_url: 'https://nasa.gov/',
        user_id: '1'
    },
    {
        title: 'Blog post 8',
        post_url: 'https://nasa.gov/',
        user_id: '1'
    },
];

const seedBlogPosts = () => BlogPost.bulkCreate(blogpostdata);

module.exports = seedPosts;