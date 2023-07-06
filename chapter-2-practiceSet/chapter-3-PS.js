"use strict;";

// question 1 ..........................
const marks = {
  lakshya: 100,
  hitesh: 80,
  vishal: 15,
  nisha: 80,
};

const myMarksKeys = Object.keys(marks);

for (let i = 0; i < myMarksKeys.length; i++) {
  console.log(
    ` Marks of  ${myMarksKeys[i]} is ${marks[Object.keys(marks)[i]]}`
  );
}

// question 2............................
for (let key in marks) {
  console.log(`Marks of ${key} is ${marks[key]}`);
}

// queston 3.............................
// let correctNo = 15;
// let i;
// while (i != correctNo) {
//   console.log("try again");
//   i = prompt("enter a number");
// }
// console.log("you have enter correct no.");

//question 4 .............................

function findMean(a, b, c, d, e) {
  let sum = a + b + c + d + e;
  let mean = sum / 5;
  return mean;
}

let result = findMean(1, 2, 3, 4, 5);
console.log(result);
