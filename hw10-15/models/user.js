const mongoose = require('mongoose');
const Photo    = require('./photo');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  img: {data: Buffer, contentType: String},
  info: String,
  photo: [Photo.schema]
});

module.exports = mongoose.model('User', userSchema);
