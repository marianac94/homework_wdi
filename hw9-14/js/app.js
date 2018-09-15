console.log('weekends rock!');

// I. Variables & Datatypes
//
// A. Q + A
// How do we assign a value to a variable?
//    --> Before you use a variable in a JavaScript program, you must declare it. Variables are declared with the var keyword as follows. Storing a value in a variable is called variable initialization. You can do variable initialization at the time of variable creation or at a later point in time when you need that variable.
//
// How do we change the value of a variable?
//   --> If the variable is definied global,
//
// How do we assign an existing variable to a new variable?
//   --> You can change the value of any variable in JS, local or global. In a function, make sure you don't declare a local variable with the same name and you can access the global.
//
// Remind me, what are declare, assign, and define?
//   --> declare is to register a variable in the scope, assign is to especifically assign a value to a variable and define is means explaining what your code is.
//
// What is pseudocoding and why should you do it?
//   --> Its writing the problem down (describing every aspect) for you to write the code mode easilty and step by step.
//
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//   --> Is a 75% - 90% planning and a 10% - 25% typing the problem and start writing it down.


B. Strings
Create a variable called firstVariable.
var = firstVariable{};

Assign it the value of the string "Hello World"
let firstVariable = "Hello World";
console.log(firstVariable);

Change the value of this variable to some number.
firstVariable = 80;
console.log(firstVariable);

Store the value of firstVariable in a new variable called secondVariable
let secondVariable = 80;
console.log(secondVariable);

Change the value of secondVariable to any string.
secondVariable = 'newString';
console.log(secondVariable);

What is the value of firstVariable?
--> The value is 80.
console.log(firstVariable);

Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
let yourName = 'Mariana';
console.log('Hello my name is ' + yourName);
