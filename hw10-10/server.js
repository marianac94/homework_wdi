const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const methodOverride = require('method-override');

const Pokemon = require('./module/pokemon');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


app.get('/', (req, res) =>{
    res.render('index.ejs', {pokemon: Pokemon});
});


app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        list : Pokemon
    });
});


app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs')
    Pokemon.push(req.body);
    res.redirect('/pokemon');
});


app.get('/pokemon/:index', (req, res) => {
  res.render('show.ejs', {
    pokemon : Pokemon[req.params.index]
  });
});


// edit the pokemon
app.get('/pokemon/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    pokemon: Pokemon[req.params.index],
    index: req.params.index
  });
});

app.put('/pokemon/:index', (req, res) => {
  console.log(req.params.index, ' index in the route');
  console.log(req.body, ' this should be the form data');

  Pokemon[req.body.index] = req.body;
  res.redirect('/pokemon');
});






app.listen(3000, (req, res) => {
  console.log('Its alive!');
});
