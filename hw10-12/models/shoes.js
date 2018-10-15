// storing data - the model
// const shoes = [
//   {
//     color: 'black',
//     size: 6,
//     typeOfShoe: 'high-heels boots'
//   },
//   {
//     color: 'brown',
//     size: 9,
//     typeOfShoe: 'flats'
//   },
//   {
//     color: 'white',
//     size: 8,
//     typeOfShoe: 'sneakers'
//   }
// ];

const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
  color: {type: String, required: true},
  size: {type: String, required: true},
  typeOfShoe: {type: String, required: true}
});

module.exports = mongoose.model('Shoes', shoeSchema);
