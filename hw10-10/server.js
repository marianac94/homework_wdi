const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Pokemon = require('./module/pokemon');


app.get('/', (req, res) =>{
    res.send('Working just fine!');
})


// app.get('/pokemon', (req, res) =>{
//     res.send(Pokemon);
// });


app.get('/pokemon/show', (req, res) => {
  res.render('show.ejs');
});


app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        list : Pokemon
    });
});





app.listen(3000, (req, res) => {
  console.log('Its alive!');
})
