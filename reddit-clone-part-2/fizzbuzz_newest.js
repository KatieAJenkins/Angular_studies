'use strict';

//Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

//INPUT: number
//OUTPUT: array of numbers and words

function fizzBuzz() {
  //for loop to count up to 100
  for(var i = 1; i < 100; i++){
    //if number / 3 & / 5 = 0, print FizzBuzz
    if([i] % 3 === 0 && [i] % 5 ===0){
      console.log("FizzBuzz");
    }
    if([i] % 3 === 0) {
      //if number / 3 = 0, print Fizz
      console.log("Fizz");
    }
    //if number / 5 = 0, print Buzz
    else if([i] % 5 === 0){
      console.log("Buzz");
    }
    else {
      console.log([i]);
    }
  }
};

fizzBuzz();
