const express = require('express');
const router = express.Router();

// require the models that the controller need
const Shoes = require('../models/shoes');


// id route -shows all the shoes
router.get('/', (req, res) => {
  console.log(req.body, 'info from shoes');
  //   res.render('id.ejs', {
  //   shoes: Shoes
  // });
  Shoes.find({}, (err, allShoes) => {
    if(err) {
      console.log(err);
    } else {
      console.log(allShoes);

      res.render('index.ejs', {
        shoes: allShoes
      });
    };
  });
});

// display a new shoe page route (create.ejs)
router.get('/create', (req, res) => {
  res.render('create.ejs')
});

// post new shoes
router.post('/', (req, res) => {
  console.log(req.body, 'shoes data base live here');
    Shoes.create(req.body, (err, createdShoe) => {
      if(err) {
        console.log(err);
      } else {
        console.log(createdShoe);
        res.redirect('/shoes')
      };
    })
    // Shoes.push(req.body);
    // res.redirect('/shoes');
});

// edit the shoes
router.get('/:id/edit', (req, res) => {
  Shoes.findById(req.params.id, (err, foundShoes) => {
    res.render('edit.ejs', {
      shoes: foundShoes
    });
  });
  // res.render('edit.ejs', {
  //   shoes: Shoes[req.params.id],
  //   id: req.params.id
  // });
});

// display only one single shoe from the array (display.ejs)
router.get('/:id', (req, res) => {
  console.log(req.params);
    Shoes.findById(req.params.id, (err, foundShoes) => {
      console.log(foundShoes, 'found shoes');
      res.render('display.ejs', {
        shoes: foundShoes
      });
    });
    // res.render('display.ejs', {
    // shoes: Shoes[req.params.id]
    // });
});

// delete the shoes
router.delete('/:id', (req, res) => {
  console.log(req.params.id, 'request to delete this');
  Shoes.findByIdAndRemove(req.params.id, (err, deleteShoes) => {
    res.redirect('/shoes')
  });
    // Shoes.splice(req.params.id, 1);
    // res.redirect('/shoes');
});

// edit the shoes and update the model
router.put('/:id', (req, res) => {
  console.log(req.body, 'this are the changes made');
    Shoes.findByIdAndUpdate(req.params.id, req.body, (err, updateModelShoes) => {
      res.redirect('/shoes')
    });
  // Shoes[req.params.id] = req.body
  //   res.redirect('/shoes');
});


module.exports = router;
