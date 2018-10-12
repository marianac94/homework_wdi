const mongoose = require('mongoose');

const vampireSchema = new Schema({
  name: {type: String, required: true}
  hair_color: String,
  eye_color: String,
  dob: {type: String, : []},
  loves: [String],
  location: String,
  gender: String,
  victims: Number
});

module.exports = new.model('Vampire', vampireSchema);
