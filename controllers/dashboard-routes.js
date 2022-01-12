const router = require("express").Router();
const sequelize = require("../config/connection");
const { BlogPost, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

//show existing blogs on the homepage

//get all posts
router.get("/", (req, res) => {
  BlogPost.findAll({
    attributes: ["id", "post_url", "title", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },

      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("dashboard", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//edit post
router.get("/edit/:id", withAuth, (req, res) => {
  BlogPost.findByPk(req.params.id, {
    attributes: ["id", "post_url", "title", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        res.render("edit-post", {
          post,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
