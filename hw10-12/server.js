// required calling variables:
const express = require('express');
const app = express();


// check if it works
app.get('/', (req, res) => {
  res.send('This is the living app')
});












// connect with server and log in terminal
app.listen(3000, (req, res) => {
  console.log('server is responding');
});
