// const fruits = ["apple", "guava", "grape", "banana"];

// const marks = [78, 67, 98, 80, 56];

// const mixed = [67.1, "Lakshya", true];

// // console.log(mixed[0]);

// console.log(fruits[fruits.length - 1]);
// console.log(mixed[1]);

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

const classes = {
  class1: "1st",
  class2: "2nd",
  class3: "3rd",
  class4: "4th",
  class5: "5th",
  class6: "6th",
  class7: "7th",
  class8: "8th",
  class9: "9th",
  class10: "10th",
  class11: "11th",
  class12: "12th",
};

const subjects = {
  english: "English",
  hindi: "Hindi",
  science: "Science & bio",
  social: "Social science",
  sanskrit: "Sanskrit",
  maths: "Maths",
};

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

// console.log(school);
// console.log(school.students[0]);

const students = [
  {
    rollNo: 101,
    fullName: "Lakshya Yadav",
    classroom: classes.class12,
    mainSubject: subjects.hindi,
    allSubjects: [
      subjects.english,
      subjects.hindi,
      subjects.science,
      subjects.maths,
    ],
    marks: 978,
  },
  {
    rollNo: 102,
    fullName: "Monty Yadav",
    classroom: "11th",
    mainSubject: subjects.english,
    allSubjects: [
      subjects.english,
      subjects.hindi,
      subjects.science,
      subjects.social,
      subjects.maths,
    ],
    marks: 718,
  },
  {
    rollNo: 254,
    fullName: "Himanshu Yadav",
    classroom: "10th",
    mainSubject: subjects.science,
    allSubjects: [
      subjects.english,
      subjects.hindi,
      subjects.science,
      subjects.maths,
    ],
    marks: 948,
  },
];
// const students2 = [];

// console.log(students[0].fullName[0]);
// console.log(students[0].marks);

// function getStudentsMarksAvg(studentArray) {
//   let total = 0;
//   // For of loop
//   for (let std of studentArray) {
//     total = total + std.marks;
//   }
//   const avgMarks = total / studentArray.length;
//   return avgMarks;
// }
// const result = getStudentsMarksAvg(students);
// const result2 = getStudentsMarksAvg(students2);

// console.log(result);

// ------------
// Use for of loop in both below questions

// Q1. sum of rollno.
// function getSumOfRollNos(studentArray) {
//   let total = 0;
//   for (let mrk of studentArray) {
//     console.log("rollNo", mrk.rollNo);
//     total = total + mrk.rollNo;
//   }

//   return total;
// }
// const result = getSumOfRollNos(students);
// console.log(result);
// getSumOfRollNos();

// Q2. Print
// I am Lakshya Yadav. my rollno is 101 and my main subject is Hindi.
// I am Monty Yadav. my rollno is 101 and my main subject is Hindi.
// I am Himanshu Yadav. my rollno is 101 and my main subject is Hindi.

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

// Q3. find the total subjects from all the students
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

// write a javascript program using for of loop and function
const employee1 = {
  fullName: "Vishal Yadav",
  attendance: [1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
};

const employee2 = {
  fullName: "Hitesh Yadav",
  attendance: [1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
};
const perDaySalary = 1000;
// Q1. how many rupees employee1 earned in 10 days?
// Q2. how many rupees employee2 earned in 10 days?

function calculateEarnings(employee, perDaySalary) {
  let workDays = 0;
  for (const day of employee.attendance) {
    if (day === 1) {
      workDays++;
    }
  }
  const earnings = workDays * perDaySalary;
  return earnings;
}

const employee1Earnings = calculateEarnings(employee1, perDaySalary);
console.log(` The salary of employee 1 is ${employee1Earnings}`);

const employee2Earnings = calculateEarnings(employee2, perDaySalary);
console.log(` The salary of employee 2 is ${employee2Earnings}`);
