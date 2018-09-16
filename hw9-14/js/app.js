console.log('weekends rock!');

// I. Variables & Datatypes

// A. Q + A
// 1. How do we assign a value to a variable?
   --> Before you use a variable in a JavaScript program, you must declare it. Variables are declared with the var keyword as follows. Storing a value in a variable is called variable initialization. You can do variable initialization at the time of variable creation or at a later point in time when you need that variable.

// 2. How do we change the value of a variable?
  --> If the variable is definied global,

// 3. How do we assign an existing variable to a new variable?
  --> You can change the value of any variable in JS, local or global. In a function, make sure you don't declare a local variable with the same name and you can access the global.

// 4. Remind me, what are declare, assign, and define?
  --> declare is to register a variable in the scope, assign is to especifically assign a value to a variable and define is means explaining what your code is.

// 5. What is pseudocoding and why should you do it?
  --> Its writing the problem down (describing every aspect) for you to write the code mode easilty and step by step.

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
  --> Is a 75% - 90% planning and a 10% - 25% typing the problem and start writing it down.


// B. Strings
// Create a variable called firstVariable.
var = firstVariable{};

// 1. Assign it the value of the string "Hello World"
let firstVariable = "Hello World";
console.log(firstVariable);

// 2. Change the value of this variable to some number.
firstVariable = 80;
console.log(firstVariable);

// 3. Store the value of firstVariable in a new variable called secondVariable
let secondVariable = 80;
console.log(secondVariable);

// 4. Change the value of secondVariable to any string.
secondVariable = 'newString';
console.log(secondVariable);

// 5. What is the value of firstVariable?
--> The value is 80.
console.log(firstVariable);

// 6. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
let yourName = 'Mariana';
console.log('Hello my name is ' + yourName);


// C. Booleans
// 1. Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

  console.log(a < b);
  console.log(c != d);
  console.log('Name' === 'Name');
  console.log(true >= false);
  console.log(false == false == false == false == false == false == true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a < b <= c);
  console.log(a === a != d);
  console.log(48 == '48');


// D. The farm
// 1. Declare a variable animal. Set it to be either "cow" or something else.
var x = 'animal';
var y = 'cow'

// 2. Write code that will print out "mooooo" if the it is equal to cow.
var x = 'animal';
var y = 'cow'

  if (x === y) {
    console.log('mooooo');
}

// 3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
var x = 'animal';
var y = 'cow';

  if (x = y) {
    console.log("mooooo");
} else {
  console.log("Hey! You're not a cow.");
}


// E. Driver's Ed
// 1. Make a variable that will hold a person's age. Be semantic.
let age = 24;

// 2. Write code that will print out "Here are the keys", if the age is 16 years or older.
let age = 24;
if (age >= 16) {
  console.log("Here are the keys");
}

// 3. If the age is younger than 16, a message should print "Sorry, you're too young."
let age = 24;
if (age >= 16) {
  console.log("Here are the keys");
} else {
  console.log("Sorry, you're too young.");
}


// II. Loops

// A. The basics
// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive.
for (let i = 0; i <= 10; i++);
  console.log(i);

// 2. Write a loop that will print out all the numbers from 10 up to and including 400.
for(let i = 10; i <= 400; i++);
  console.log(i);

// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000.
for (let i = 12; i <= 4000; i++);
  console.log(i % 3 === 0);


// B. Get even
// 1. Print out the even numbers that are within the range of 1 - 100.
for(let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
};

// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
for(let i = 0; i <= 100; i++);
  console.log(i % 2 === 0, + '<-- is an even number');


// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
for(let i = 0; i <= 100; i++);
  if (i % 5 === 0) {
    console.log("I found a number. High five!");
  } else if (i % 3 === 0) {
    console.log("I found a number. Three is a crowd");
  }
};


// D. Savings account
// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
const bank_account = [];
  for(let i = 0; i <= 10; i+=) {
    console.log(bank_account[i]);
  }


// E. Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000. If a previous question you've done has helpful bits of code in it that partially solves this problem, look back at them.
for (let i = 0; i <= 1000; i++) {
  if (i % 3 === 0 || 1 % 5 === 0) {
    console.log(i);
  }
};
// You just solved Project Euler problem 1!


III. Array & Control Flow

A. Talk about it:
1. What are the things in an array called?
--> Arrays contain variables and objects that are called elements. They can store a mixure of data types in a single array.

2. Do Arrays guarantee those things will be in order?
--> It follows the order you gave to the array, unless you aplly the sort function to the array for the elements to console.log in different and random order.

3. What real-life thing could you model with an array?
--> It can store a lot of information, for example, if selling clothes, cars, whatever comes in mind, you can store all the information of the element of your choice.


B. Easy does it
1. Create an array that contains three quotes and store it in a variable called quotes.
const quotes = ['You’ve gotta dance like there’s nobody watching.', 'In three words I can sum up everything I’ve learned about life: It goes on.', 'The mind is everything. What you think you become.'];
console.log(quotes);


C. Accesing elements
Given the following array const randomThings = [1, 10, "Hello", true]
1. How do you access the 1st element in the array?
const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);

2. Change the value of "Hello" to "World".
const randomThings = [1, 10, "Hello", true];
randomThings[2] = 'World';
console.log(randomThings);

3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);


D. Change Values
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
1. What would you write to access the 3rd element of the array?
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass[2]);

2. Change the value of "Github" to "Octocat"
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass[4] = 'Octocat';
console.log(ourClass);

3. Add a new element, "Cloud City" to the array.
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass[5] = 'Cloud City';
console.log(ourClass);


E. Mix it up
Given the following array: const myArray = [5, 10, 500, 20]
Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.
const myArray = [5, 10, 500, 20]
myArray.push('Egon', 'hello');
console.log(myArray);

Remove the 5 from the beginning of the array.
const myArray = [5, 10, 500, 20]
myArray.push('Egon', 'hello');
myArray.pop(0);
console.log(myArray);

Add the string "Bob Marley" to the beginning of the array.
const myArray = [5, 10, 500, 20]
  myArray.push('Egon', 'hello');
    myArray.pop(0);
      myArray.push('Bob Marley');

console.log(myArray);

Remove the string of your choise from the end of the array.
const myArray = [5, 10, 500, 20]
  myArray.push('Egon', 'hello');
    myArray.pop(0);
      myArray.push('Bob Marley');
        myArray.pop('hello');

console.log(myArray);

Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
const myArray = [5, 10, 500, 20]
  myArray.push('Egon', 'hello');
    myArray.pop(0);
      myArray.push('Bob Marley');
        myArray.pop('hello');

const reversed = myArray.reverse();
console.log(myArray);
