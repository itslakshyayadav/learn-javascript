"use strict;";
let Name = "lakshya yadav is very good boy.";
console.log(Name);

// question 1
console.log('har"'.length);

// quetion 2
const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);

// quetion 3
console.log(Name.toLocaleUpperCase("en-US"));

//question 4
let str = "this is amout of  Rs 1000";
let amount = Number.parseInt(str.slice("this is amout of Rs ".length));
console.log(amount);
console.log(typeof amount);

//question 5
let firstName = "laksh";
laksh[2] = "M";
// console.log(firstName);
//
