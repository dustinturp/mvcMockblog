const router = require('express').Router();

//get all users

router.get('/', (req, res) => {
    User.findAll({
      attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


//get one user (there should only be one user)
router.get('/:id', (req, res) => {
    User.findOne([

    ])
    .then()
    .catch()
});

//create a user

router.post('/', (req, res) => {
    User.create([

    ])
    .then()
    .catch()
});

//find one '/login'
router.post('/login', (req, res) => {
    User.findOne([

    ])
    .then()
    .catch()
});

// ('/logout')
router.post('/logout', (req, res) => {

});

//update a user pit
router.put('/:id', (req, res) => {
    User.update([

    ])
    .then()
    .catch()
});


//delete a user 

router.delete('/:id', (req, res) => {
    User.destroy([

    ])
    .then()
    .catch()
});



module.exports = router;