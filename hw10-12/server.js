// required calling variables:
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Shoes = require('./models/shoes');

app.use(bodyParser.urlencoded({extended:false}));

// check if it works
app.get('/', (req, res) => {
  res.send('This is the living app')
});



// Index route -shows all the shoes
app.get('/shoes', (req, res) => {
    res.render('index.ejs', {
    shoes: Shoes
  });
});

// display only one single shoe from the array (display.ejs)
app.get('/shoes/:index', (req, res) => {
  console.log(req.params);
    res.render('display.ejs', {
    shoes: Shoes[req.params.index]
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







// connect with server and log in terminal
app.listen(3000, (req, res) => {
  console.log('server is responding');
});
