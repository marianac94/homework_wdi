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
// const crazyObject = {
//   taco: [
//     {
//       meat: 'steak',
//       cheese: ['panela', 'queso', 'chihuahua']
//     },
//     {
//       meat: 'chicken',
//       salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
//     },
//   ],
//
//   larry: {
//     nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//     quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//
//     characters: [
//       {
//         name: "Jeff",
//         occupation: "manager"
//       },
//       {
//         name: "funkhauser",
//         occupation: "tv dude"
//       },
//       {
//         name: "susie",
//         occupation: "jeffs wife",
//         favourtieHobby: "Swearing at Larry and Jeff"
//       },
//     ]
//   }
// }
//
// // Use crazyObject to log the following.
//
// console.log(crazyObject.taco[1].salsa[5]);
//   console.log(crazyObject.larry.quotes[0]);
//     console.log(crazyObject.larry.characters[2].favourtieHobby);
//       console.log(crazyObject.larry.nicknames[1]);
//         console.log(crazyObject.larry.characters[1].name);



// Object-ception
//         const inception = {
//            reality: {
//                dreamLayer1: {
//                    dreamLayer2: {
//                        dreamLayer3: {
//                            dreamLayer4: {
//                                dreamLayer5: {
//                                    dreamLayer6: {
//                                        limbo: "Joseph Gordon Levitt"
//                                   }
//                                }
//                            }
//                        }
//                    }
//                }
//            }
//         }
//
// inception.limbo = null;
// console.log(inception);



// Bond Films
// Copy the following bondFilms array of objects above into your js file. Use loops and conditionals and functions in order to complete the below:

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];


// Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.
const bondTitles = {};
  for (let key in bondFilms) {
  bondTitles[bondFilms[key].title] = bondTitles;
  }
    console.log(bondTitles);


// Create a new array oddBonds, of only the Bond films released on odd-numbered years.
const oddBonds = {};
  for (let i = 0; i <= bondFilms.length; i++) {
    if (bondFilms[i].year % 2 !== 0) {
      console.log(bondFilms[i].year + ' is odd')
    }
  }


// Determine the total cumulative gross of the Bond franchise, and console.log the result.
const bondGross = {};
  for(let i = 0; i < bondGross.length; i++) {
     item = bondFilms[i];
     key = Object.keys(item)[0];
     item = item[key];

     if(!result[key]){
         result[key] = item;
     }else{
         result[key] += item;
     };
