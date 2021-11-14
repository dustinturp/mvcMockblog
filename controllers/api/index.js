const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const blogRoutes = require('./blogpost-routes.js');

router.use('/users', userRoutes);
router.use('/posts', blogRoutes);

module.exports = router;