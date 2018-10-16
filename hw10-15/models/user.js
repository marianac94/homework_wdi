const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {type: String, require: true},
  password: {type: String, require: true},
  img: {data: Buffer, contentType: String},
  info: String
});

module.exports = mongoose.model('User', userSchema);
