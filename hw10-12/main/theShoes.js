const express = require('express');
const router = express.Router();

// require the models that the controller need
const Shoes = require('../models/shoes');

// Index route -shows all the shoes
router.get('/', (req, res) => {
  console.log(req.body, 'info from shoes');
    res.render('index.ejs', {
    shoes: Shoes
  });
});

router.get('/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    shoes: Shoes[req.params.index],
    index: req.params.index
  });
});

// display a new shoe page route (create.ejs)
router.get('/create', (req, res) => {
  res.render('create.ejs')
});

router.post('/', (req, res) => {
  console.log(req.body, 'shoes data base live here');
    Shoes.push(req.body);
    res.redirect('/shoes');
});

// display only one single shoe from the array (display.ejs)
router.get('/:index', (req, res) => {
  console.log(req.params);
    res.render('display.ejs', {
    shoes: Shoes[req.params.index]
  });
});

// delete the shoes
router.delete('/:index', (req, res) => {
  console.log(req.params.index, 'request to delete this');
    Shoes.splice(req.params.index, 1);
    res.redirect('/shoes');
});

// edit the shoes
router.put('/:index', (req, res) => {
  console.log(req.body, 'this are the changes made');
  Shoes[req.params.index] = req.body
    res.redirect('/shoes');
});


module.exports = router;
