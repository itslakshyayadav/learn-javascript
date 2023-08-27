// const person = {
//   fullName: "Lakshya Yadav",
//   education: "BCA",
//   father: "Ram Avatar Yadav",
//   color: "Yellow",
// };

// for (let b in person) {
//   console.log(b);
//   console.log(person[b]);
// }

// const subjects = {
//   english: 87,
//   hindi: 89,
//   maths: 90,
//   science: 99,
//   social: 78,
// };

// // Use for in loop to find total marks

// let total = 0;

// for (let a in subjects) {
//   total += subjects[a];
// }

// console.log(total);

const subjectArray = [
  {
    subject: "english",
    marks: 87,
  },
  {
    subject: "hindi",
    marks: 89,
  },
  {
    subject: "maths",
    marks: 90,
  },
  {
    subject: "science",
    marks: 99,
  },
  {
    subject: "social",
    marks: 78,
  },
];

// use For in loop to find the total marks
let total = 0;

for (let a in subjectArray) {
  total += subjectArray[a].marks;
}
console.log("total Marks", total);
