const numbers = [2, 67, 34, 0, 23, 42, 8, 199];

const students = [
  {
    id: 101,
    name: "Lakshya",
  },
  {
    id: 102,
    name: "Vishal",
  },
  {
    id: 103,
    name: "Himanshu",
  },
];

// const resultStudent = students.find((std) => {
//   if (std.id === 102) {
//     return true;
//   }
//   return false;
// });
// console.log("result student", resultStudent);

const resultStudentIndex = students.findIndex((std) => {
  if (std.id === 102) {
    return true;
  }
  return false;
});
console.log("result student", resultStudentIndex);

// Array.find
// const num = numbers.find((item, index) => {
//   //   console.log("index -->", index);
//   if (item % 2 == 1) {
//     // console.log(`item => `, item);
//     return true;
//   }
//   return false;
// });
// console.log("num -->", num);

// let result;
// for (let i = 0; i < numbers.length; i++) {
//   const item = numbers[i];
//   console.log("i -->", i);

//   if (item % 2 == 1) {
//     console.log(`item => `, item);
//     result = item;
//     break;
//   }
// }
// console.log("result -->", result);

// let num2;
// numbers.forEach((item, index) => {
//   console.log("index -->", index);
//   if (item % 2 == 1) {
//     console.log(`item => `, item);
//     num2 = item;
//     // break;
//   }
// });

// console.log("num2 -->", num2);

// Array.findIndex
