// const fruits = ["apple", "guava", "grape", "banana"];

// const marks = [78, 67, 98, 80, 56];

// const mixed = [67.1, "Lakshya", true];

// // console.log(mixed[0]);

// console.log(fruits[fruits.length - 1]);
// console.log(mixed[1]);

const students = [
  {
    fullName: "Lakshya",
    class: "BCA",
    subject: ["English", "Maths", "Physics"],
  },
  {
    fullName: "Monty",
    class: "12",
    subject: ["English", "Maths"],
  },
];

// console.log(students[1].subject[1]);

// I am Monty, My favourite subect is Maths.

console.log(
  `I am ${students[1].fullName}, My favourites subject is ${students[1].subject[1]}`
);
