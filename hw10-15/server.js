const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

const userControllers = require('./controllers/user');


app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));


// every route will start from this two
app.use('/user', userControllers);


app.get('/', (req, res) => {
  res.render('index.ejs');
});



app.listen(3000, () => {
  console.log('server is responding');
})
