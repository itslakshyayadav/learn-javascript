const colors = ["red", "green", "blue"];
colors.push("black");
console.log(colors);

let New = colors.shift();

console.log(colors);

colors.unshift("yellow");
console.log(colors);

const employees = [
  { name: "John", age: 30, empId: 101 },
  { name: "Peter", age: 24, empId: 102 },
  { name: "Tom", age: 40, empId: 103 },
  { name: "Jerry", age: 20, empId: 104 },
];

// Q1. Write a function to enroll new employees and auto increment the empId? in javascript

const firstBatchEmployees = [
  { name: "Lakshya", age: 20 },
  { name: "Vishal", age: 28 },
];

// console.log(onboardEmployees(firstBatchEmployees));

// Result array:
// [
//     { name: "John", age: 30, empId: 101 },
//     { name: "Peter", age: 24, empId: 102 },
//     { name: "Tom", age: 40, empId: 103 },
//     { name: "Jerry", age: 20, empId: 104 },
//     { name: "Lakshya", age: 20, empId: 105 },
//   { name: "Vishal", age: 28, empId: 106 },
// ];

const secondBatchEmployees = [
  { name: "Amar", age: 30 },
  { name: "Aman", age: 29 },
];

// console.log(onboardEmployees(secondBatchEmployees));

// [
//   { name: "John", age: 30, empId: 101 },
//   { name: "Peter", age: 24, empId: 102 },
//   { name: "Tom", age: 40, empId: 103 },
//   { name: "Jerry", age: 20, empId: 104 },
//   { name: "Lakshya", age: 20, empId: 105 },
//   { name: "Vishal", age: 28, empId: 106 },
//   { name: "Lakshya", age:30, empId: 107 },
//   { name: "Vishal", age: 29, empId: 108 },
// ];
//
//
//
//
//
//
