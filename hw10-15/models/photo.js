const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  username: String,
  password: String,
  img: {data: Buffer, contentType: String},
  info: String
});

module.exports = mongoose.model('Photo', photoSchema);
