// required calling variables:
const express = require('express');
const app = express();
const Shoes = require('./models/shoes');

// check if it works
app.get('/', (req, res) => {
  res.send('This is the living app')
});

// display all shoes in the index route
app.get('/shoes', (req, res) => {
  res.send(Shoes)
});

// display only one single shoe from the array
app.get('/shoes/:index', (req, res) => {
  console.log(req.params);
  
  res.render('display.ejs', {
    shoes: Shoes[req.params.index];
  });
});









// connect with server and log in terminal
app.listen(3000, (req, res) => {
  console.log('server is responding');
});
