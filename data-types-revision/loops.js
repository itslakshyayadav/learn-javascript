const numbers = [10, 20, 30, 40, 55, 60, 75, 90];

// forEach
// let sum = 0;
// const myResult = numbers.forEach(function (currValue, index) {
//   sum = sum + currValue;
//   return sum;
// });

// console.log(myResult);
// console.log("total sum: ", sum);

// const output = [10, 20, 30, 40, 60, 90];
// let result = [];
// numbers.forEach(function (currValue, index) {
//   if (currValue % 10 === 0) {
//     result.push(currValue);
//   }
// });

// const newArray = numbers.filter(function (currValue, index) {
//   return currValue % 10 === 0;
// });

// console.log(newArray);

// const numbers = [2, 3, 5, 6, 7];
// const resultArr = numbers.filter(function (currValue, index) {
//   return currValue % 2 === 0;
// });
// console.log("resultArr", resultArr);

const fruits = ["apple", "banana", "grapes", "guava"];
// const result = ['I love apple', 'I love banana', 'I love grapes', 'I love guava'];

const newFruits = fruits.map(function (currValue, index) {
  return `<h1>I love ${currValue}</h1>`;
});

console.log("newFruits", newFruits);

const marks = [78, 66, 98, 79, 45, 91];

const newMarks = marks.map(function (currValue) {
  return currValue + 2;
});
console.log(newMarks);
