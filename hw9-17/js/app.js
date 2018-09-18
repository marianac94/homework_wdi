console.log("Yey! It works!");


// 1. Data types

// So far we have seen:

// Strings
// Numbers
// Booleans
// Arrays
// Objects

// When these datatypes are combined, we get a data structure, for example, an array that contains objects that each contain booleans.

// Suppose you are tasked with creating some software, and it is up to you to determine which datatypes and what data structure to use. For each of the following, write which data types you would use to represent the data, and then give a small example of the data structure:

// A light switch that can be either on or off.
// Booleans
      // let light = true;
      // $("#togBtn").on('change', function() {
      //   if ($(this).is(':checked')) {
      //     light = $(this).is(':checked');
      //     console.log(light);
      //   } else {
      //     light = $(this).is.(':checked');
      //     console.log(light);
      //   }
      // };

// A user's email address.
// Strings
      // function validateEmail(value);
      //   let email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      //     return email.test(value);

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// Arrays
      // const spaceship = ['hull', 'laser blasters', 'tractor beam', 'wrap drive'];
      //   console.log(spaceship);

// A list of student names from our class.
// Arrays or Objects  <-- depends on how much information you want to give
      // const student = ["Mariana", "Christine", "Mirza", "Shahazad", "Jawad", "Alex", "Julian", "Ben", "Stephen"];
      //   console.log(student);

// A list of student names from our class, each with a location.
// objects
      // const student = [
      //   {
      //     name: "Mariana",
      //     location: "Austin",
      //     age: 25
      //   },
      //   {
      //     name: "Charlotte",
      //     location: "Chicago",
      //     age: 28
      //   },
      //   {
      //     name: "Colin",
      //     location: "Dallas",
      //     age: 20
      //   },
      //   {
      //     name: "Alex",
      //     location: "Austin",
      //     age: 30
      //   }
      // ];
      //   console.log(student);

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// Objects
        // const student = [
        //   {
        //     name: "Elena",
        //     location: "Denver",
        //     age: 30,
        //     favTvShow: "Grey Anatomy"
        //   },
        //   {
        //     name: "Caroline",
        //     location: "Austin",
        //     age: 19,
        //     favTvShow: 90210
        //   },
        //   {
        //     name: "Jeff",
        //     location: "Chicago",
        //     age: 23,
        //     favTvShow: "Friends"
        //   },
        //   {
        //     name: "Daniel",
        //     location: "Dallas",
        //     age: 25,
        //     favTvShow: "Lost"
        //   }
        // ];
        //   console.log(student);



// Take it easy
// Make an array that holds all of the colors of the rainbow.
// const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
//   console.log(rainbow);

// Write code that will access "blue" from the rainbow array.
// console.log(rainbow[4]);

// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
// const Mariana = [
//   food: "Sushi",
//   hobby: "Cooking",
//   town: "Austin",
//   datatype: "Objects"
// ]
//     console.log(Mariana);

// Write code that will access your hobby from the object that you just created.
// console.log(Mariana.hobby);



// Craze Object!
const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],

  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],

    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}

// Use crazyObject to log the following.

console.log(crazyObject.taco[1].salsa[5]);
  console.log(crazyObject.larry.quotes[0]);
    console.log(crazyObject.larry.characters[2].favourtieHobby);
      console.log(crazyObject.larry.nicknames[1]);
        console.log(crazyObject.larry.characters[1].name);
