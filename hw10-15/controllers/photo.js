const express   = require('express');
const router    = express.Router();
const Photo     = require('../models/photo');
const User      = require('../models/user');

router.get('/', (req, res) => {
    Photo.find({}, (err, foundPhoto) => {
      res.render('photo/index.ejs', {
        photo: foundPhoto
    });
  });
});

router.get('/new', (req, res) => {
  res.render('photo/new.ejs')
});

router.get('/:id', (req, res) => {
  Photo.findById(req.params.id, (err, photoFound) => {
    photo: foundPhoto
  });
});

router.get('/:id/edit', (req, res) => {
  Photo.findById(req.params.id, (err, editPhoto) => {
    photo: editPhoto
  });
});

router.post('/', (req, res) => {
  Photo.create(req.body, (err, createdPhoto) => {
    if(err) {
      console.log(err);
    } else {
      console.log(createdPhoto);
    }
  });
});

router.put('/:id', (req, res) => {
  Photo.findByIdAndUpdate(req.params.id, req.body, (err, updatePhoto) => {
      res.redirect('/photos')
  });
});

router.delete('/:id', (req, res) => {
  Photo.findByIdAndDelete(req.body.id, (err, deletedPhoto) => {
    res.redirect('/photos')
  });
});



module.exports = router;
