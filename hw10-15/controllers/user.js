const express   = require('express');
const router    = express.Router();
const User      = require('../models/user');
const Photo     = require('../models/photo');


router.get('/', async (req, res) => {
  try {
    const foundUser = await User.find()
    res.render('user/index.ejs', {
      user:foundUser
    });
  } catch(err) {
    res.send(err)
  }
});


router.get('/new', (req, res) => {
  res.render('user/new.ejs')
});


router.get('/:id', async (req, res) => {
  console.log(req.params.id);
  try {
    const foundUser = await User.findById(req.params.id);

    res.render('user/show.ejs', {
      user: foundUser
    });
  } catch(err) {
    res.send(err)
  }
});


router.get('/:id/edit', async (req, res) => {
  try {
    const editUser = await User.findById(req.params.id);
    res.render('user/edit.ejs', {
      user: editUser
    });
  } catch(err) {
    res.send(err)
  }
});


router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const createdUser = await User.create(req.body);
    res.redirect('/user')
  } catch(err) {
    res.send(err)
  }
});


router.put('/:id', async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/user')
  } catch(err) {
    res.send(err)
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
  } catch(err) {
    res.send(err)
  }
});




module.exports = router;
