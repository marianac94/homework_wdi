const express = require('express');
const Shoes = require('../models/shoes');

// Index route -shows all the shoes
app.get('/shoes', (req, res) => {
  console.log(req.body, 'info from shoes');
    res.render('index.ejs', {
    shoes: Shoes
  });
});

app.get('shoes/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    shoes: Shoes[req.params.index],
    index: req.params.index
  });
});

// display a new shoe page route (create.ejs)
app.get('/shoes/create', (req, res) => {
  res.render('create.ejs')
});

app.post('/shoes', (req, res) => {
  console.log(req.body, 'shoes data base live here');
    Shoes.push(req.body);
    res.redirect('/shoes');
});

// display only one single shoe from the array (display.ejs)
app.get('/shoes/:index', (req, res) => {
  console.log(req.params);
    res.render('display.ejs', {
    shoes: Shoes[req.params.index]
  });
});

// delete the shoes
app.delete('/fruits/:index', (req, res) => {
  console.log(req.params.index, 'request to delete this');
    Fruits.splice(req.params.index, 1);
    res.redirect('/shoes');
});

// edit the shoes
app.put('/shoes/:index', (req, res) => {
  console.log(req.body, 'this are the changes made');
  Shoes[req.params.index] = req.body
    res.redirect('/shoes');
});
