console.log('yey! its working');


// 1. Verbal questions

// 1. What is the difference between a parameter and an argument?
//   -> The parameter is the variable defined by a method that recives a value when it is called. The argument is a value that passes to a method when it is invoked.


// 2. Within a function, what is the difference between return and console.log?
//   -> The return value is for giving a certain value to tha variable, to give a prupose, the console.log function will write the argument on the console, it will run the hole thing.


// 3. What are the implications of the ability of a function to return a value?
//   --> The return value is important because it ends the function excecution and return the statement, in other words, it is the function caller.



2. Palindrome again.

const checkPalindrome = (word) => {
  console.log(word.split(" ").reverse().join(" "));

const reversedWord = (word.split(" ").reverse().join(" "));

  if(word === reversedWord) {
      return true;
    } else {
      return false;
    }
}

console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Borscht"));
