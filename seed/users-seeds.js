const sequelize = require('../config/connection');
const { User, BlogPost } = require('../models');

const userdata = [
  {
    username: 'mainuser',
    email: 'emailaccount@gmail.com',
    password: 'password123'
  },
];

const seedUsers = () =>  User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;