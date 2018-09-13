// console.log('Im working!')
//
//
// 1. Write a for loop that will log the numbers 1 through 20.
// for(let i = 1; i <= 20; i++){
//   console.log(i);
// }
//
//
// 2. Write a for loop that will log only the even numbers in 0 through 200.
// for (let i = 0; i <= 200; i+=2){
//   console.log(i);
// }
//
//
// 3. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// for (let i = 0; i <= 20; i++){
//   console.log('Love me, pet me! HSSSSSS!');
// };
//
// 3.1 For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random. (Hint: You will need to use Math.random())
// var catArray = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...'];
// for(let i = 0; i < 20; i++){
//   console.log('Love me, pet me! HSSSSSS!');
//   if (i % 2 === 0) {
//     console.log(catArray[getRandomInt(0, 2)]);
//   }
// };
//
//
// 4. NOTE: THIS IS A CLASSIC RITE-OF-PASSAGE FOR JAVASCRIPT PROGRAMMERS, ESPECIALLY ONES AT GA
// ---
// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
// for(let i = 1; i <= 100; i++){
// console.log(i);
//     if(i % 3 === 0) {
//     console.log('Fizz');
//     } else if(i % 5 === 0) {
//       console.log('Buzz');
//       } else if(3 % i && 5 % i === 0)
//         console.log('FizzBuz');
// }
//
//
// 5. Getting to know you
// Use the following arrays to answer the questions below (name, age, hometown):
//
// const shahzad = ["Shahzad", 1000, "Austin"];
// const jim = ["Jim", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const daniel = ["Daniel", 186, "Dallas"];
// const ryan = ["Ryan", 65, "Denver"];
//
// Daniel decides that Shahzad can't be named "Shahzad" anymore. Remove "Shahzad" from the shahzad array and replace it with "Gameboy".
//     var remove = shahzad.splice(0, 1, 'Gameboy');
//       console.log(shahzad);
//
// Daniel just had his birthday; change Daniel's array to reflect him being a year older. Don't just hard code 187--pretend that you don't know that his age is 186, and write your code to just make him a year older than whatever age he was.
//         daniel[1] += 1
//           console.log(daniel);
//
//
// Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
//         daniel[2] = 'Gotham City'
//             console.log(daniel);
//
// Reuben left Durham 5 years ago to come to Chicago. Remove "Durham" from Reuben's array and add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
//       var remove = reuben.splice(2, 2, 'Chicago');
//         console.log(reuben)
//
// Jim could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
//         jim.pop("All cities");
//         jim.push("Chicago", "SF", "Mexico")
//           console.log(jim);
//
// Bonus: Whoops! Jim is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim is now, remove it from the array using .splice()
//           var remove = jim.splice(4)
//             console.log(jim);


6. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

Use a for loop to call .toUpperCase() on each of them and print out the result.

Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.

const ninjaTurtles = ['donatello', 'leonardo', 'raphael', 'michaelangelo'];

for(let i = 0; i < ninjaTurtles.length; i++){
  ninjaTurtles.map(function(ninjaTurtles) { return ninjaTurtles.toUpperCase()})
}
