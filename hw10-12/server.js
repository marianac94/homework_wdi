const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('This is the living app')
});












app.listen(3000, (req, res) => {
  console.log('server is responding');
});
