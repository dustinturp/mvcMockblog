const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const blogRoutes = require('./blogpost-routes.js');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', blogRoutes);
router.use('/comments', commentRoutes);

module.exports = router;