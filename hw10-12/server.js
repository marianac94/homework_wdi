// required calling variables:
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

const theShoesControllers = require('./controllers/theShoes');

// require the model from the folder (connecting it)
// const Shoes = require('./models/shoes');

// middleWare- function that happens in the request from the client on the server
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use('/shoes', theShoesControllers);

// check if it works
app.get('/', (req, res) => {
  res.send('This is the living app')
});






// connect with server and log in terminal
app.listen(3000, (req, res) => {
  console.log('server is responding');
});
