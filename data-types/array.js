// const fruits = ["apple", "guava", "grape", "banana"];

// const marks = [78, 67, 98, 80, 56];

// const mixed = [67.1, "Lakshya", true];

// // console.log(mixed[0]);

// console.log(fruits[fruits.length - 1]);
// console.log(mixed[1]);
//
//
//
//
//

// const students = [
//   {
//     fullName: "Lakshya",
//     class: "BCA",
//     subject: ["English", "Maths", "Physics"],
//   },
//   {
//     fullName: "Monty",
//     class: "12",
//     subject: ["English", "Maths"],
//   },
// ];

// console.log(students[1].subject[1]);

// I am Monty, My favourite subect is Maths.

// console.log(
//   `I am ${students[1].fullName}, My favourites subject is ${students[1].subject[1]}`
// );
// );
//
//
//
//
//
//
//

// const classes = {
//   class1: "1st",
//   class2: "2nd",
//   class3: "3rd",
//   class4: "4th",
//   class5: "5th",
//   class6: "6th",
//   class7: "7th",
//   class8: "8th",
//   class9: "9th",
//   class10: "10th",
//   class11: "11th",
//   class12: "12th",
// };

// const subjects = {
//   english: "English",
//   hindi: "Hindi",
//   science: "Science & bio",
//   social: "Social science",
//   sanskrit: "Sanskrit",
//   maths: "Maths",
// };

// const school = {
//   students: [
//     {
//       rollNo: 101,
//       fullName: "Lakshya Yadav",
//       classroom: classes.class12,
//       mainSubject: subjects.hindi,
//       allSubjects: [subjects.english, subjects.hindi, subjects.science],
//     },
//     {
//       rollNo: 102,
//       fullName: "Monty Yadav",
//       classroom: "11th",
//       mainSubject: subjects.english,
//     },
//     {
//       rollNo: 254,
//       fullName: "Himanshu Yadav",
//       classroom: "10th",
//       mainSubject: subjects.science,
//     },
//   ],
//   teachers: [
//     {
//       subject: "Maths",
//       fullName: "Vishnu Yadav",
//       phone: "+919558211215",
//       expertSubject: subjects.science,
//     },
//   ],
// };
// //
// //
// //
// //
// //

// console.log(school);
// console.log(school.students[0]);

// const students = [
//   {
//     rollNo: 101,
//     fullName: "Lakshya Yadav",
//     classroom: classes.class12,
//     mainSubject: subjects.hindi,
//     allSubjects: [
//       subjects.english,
//       subjects.hindi,
//       subjects.science,
//       subjects.maths,
//     ],
//     marks: 978,
//   },
//   {
//     rollNo: 102,
//     fullName: "Monty Yadav",
//     classroom: "11th",
//     mainSubject: subjects.english,
//     allSubjects: [
//       subjects.english,
//       subjects.hindi,
//       subjects.science,
//       subjects.social,
//       subjects.maths,
//     ],
//     marks: 718,
//   },
//   {
//     rollNo: 254,
//     fullName: "Himanshu Yadav",
//     classroom: "10th",
//     mainSubject: subjects.science,
//     allSubjects: [
//       subjects.english,
//       subjects.hindi,
//       subjects.science,
//       subjects.maths,
//     ],
//     marks: 948,
//   },
// ];
// const students2 = [];

// // console.log(students[0].fullName[0]);
// // console.log(students[0].marks);

// // function getStudentsMarksAvg(studentArray) {
// //   let total = 0;
// //   // For of loop
// //   for (let std of studentArray) {
// //     total = total + std.marks;
// //   }
// //   const avgMarks = total / studentArray.length;
// //   return avgMarks;
// // }
// // const resultNew = getStudentsMarksAvg(students);
// // const result2 = getStudentsMarksAvg(students2);

// // console.log(resultNew);

// // ------------
// // Use for of loop in both below questions
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// // Use for of loop in both below questions

// // Q1. sum of rollno.
// // function getSumOfRollNos(studentArray) {
// //   let total = 0;
// //   for (let mrk of studentArray) {
// //     console.log("rollNo", mrk.rollNo);
// //     total = total + mrk.rollNo;
// //   }

// //   return total;
// // }
// // const resultIs = getSumOfRollNos(students);
// // console.log(resultIs);
// // getSumOfRollNos();
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //

// // Q2. Print
// // I am Lakshya Yadav. my rollno is 101 and my main subject is Hindi.
// // I am Monty Yadav. my rollno is 101 and my main subject is Hindi.
// // I am Himanshu Yadav. my rollno is 101 and my main subject is Hindi.

// function printIntroText(studentArray) {
//   const resultArr = [];
//   for (let fullStr of studentArray) {
//     const myText = `I am ${fullStr.fullName}. my rollno is ${fullStr.rollNo} and my main subject is ${fullStr.mainSubject}`;
//     console.log(myText);
//     resultArr.push(myText);
//   }
//   return resultArr;
// }
// const introText = printIntroText(students);
// console.log(introText);
// //
// //
// //
// //
// //
// //
// //

// // Q3. find the total subjects from all the students
// function sumOfsubject(studentArray) {
//   let total = 0;
//   for (let student of studentArray) {
//     console.log(student.allSubjects);
//     total = total + student.allSubjects.length;
//   }
//   return total;
// }
// const result = sumOfsubject(students);
// console.log(result);
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //

// // write a javascript program using for of loop and function
// const employee1 = {
//   fullName: "Vishal Yadav",
//   attendance: [1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
// };

// const employee2 = {
//   fullName: "Hitesh Yadav",
//   attendance: [1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
// };
// const perDaySalary = 1000;
// // Q1. how many rupees employee1 earned in 10 days?
// // Q2. how many rupees employee2 earned in 10 days?

// function calculateEarnings(employee, perDaySalary) {
//   let workDays = 0;
//   for (const day of employee.attendance) {
//     if (day === 1) {
//       workDays++;
//     }
//   }
//   const earnings = workDays * perDaySalary;
//   return earnings;
// }

// const employee1Earnings = calculateEarnings(employee1, perDaySalary);
// console.log(` The salary of employee 1 is ${employee1Earnings}`);

// const employee2Earnings = calculateEarnings(employee2, perDaySalary);
// console.log(` The salary of employee 2 is ${employee2Earnings}`);

// console.log(employee1["attendance"].length);
// employee1["attendance"][0] = 5;
// console.log(employee1["attendance"]);
// console.log(typeof employee1);

const arr = [2, 0, 2, 5, 4, 52, 4, 9, 58];
const arr1 = [10, 92, 65, 34, 82, 24, 59];
const arr2 = [121, 110, 121, 115, 114, 115, 514, 419];

for (let i = 0; i < arr.length; i++) {
  console.log(i);
}

let a = arr.toString();
console.log(a, typeof a);

let b = arr.join(" is to the ");
console.log(b, typeof b);

let c = arr.pop();
console.log(c, typeof c);
// console.log(arr);

let d = arr.push("lakshya");
console.log(arr);

let e = arr1.shift(10);
console.log(e);

delete arr[0];
console.log(arr);

// array concat addition of arrays
let newArray = arr.concat(arr1, arr2);
console.log(newArray);

// // compare method modify the array
let compare = (a, b) => {
  return b - a;
};
arr1.sort(compare);
console.log(arr1);

// reverse
newArray.reverse();
console.log(newArray);

// splice and slice
let num = [10, 62, 82, 93, 63, 75, 85];
let deletedValues = num.splice(0, 3, 15, 12, 20);
console.log(num, deletedValues);
//
let newNum = num.slice(2, 6);
console.log(newNum);

// // forEach loop
let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
newArr.forEach((items) => {
  console.log(items * items);
});
//
//
newArr.forEach((element) => {
  console.log("2 x", element, "=", element * 2);
});

// Array.form
// let naam = "lakshya yadav";
// let ly = Array.from(naam);
// console.log(ly);

// for ...of   loop
// for (let ar of newArr) {
//   console.log(ar);
// }

// //for...in  loop
// for (let ar in newArr) {
//   console.log(ar);
// }

// // map method ....
// let aa = newArr.map((value, index, array) => {
//   console.log(value, index, array);
//   return value;
// });

// filter method ...
let opps = [23, 69, 8, 7, 3, 45, 96, 1];
let a1 = opps.filter((a) => {
  return a < 50;
});
console.log(a1);

// let neo = [23, 69, 8, 7, 3, 45, 96, 1];
// let reduce_fun = neo.reduce((l1, l2) => {
//   return l1 + l2;
// });
// console.log(reduce_fun);
