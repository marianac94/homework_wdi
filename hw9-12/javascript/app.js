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
4. NOTE: THIS IS A CLASSIC RITE-OF-PASSAGE FOR JAVASCRIPT PROGRAMMERS, ESPECIALLY ONES AT GA
---
Write a javascript application that logs all numbers from 1 - 100.
If a number is divisible by 3 log "Fizz" instead of the number.
If a number is divisible by 5 log "Buzz" instead of the number.
If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
for(let i = 1; i <= 100; i++){
console.log(i);
    if(i % 3 === 0) {
    console.log('Fizz');
    } else if(i % 5 === 0) {
      console.log('Buzz');
      } else if(3 % i && 5 % i === 0)
        console.log('FizzBuz');
}
