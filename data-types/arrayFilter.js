// const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// function filterEvenNumbers(numberArray) {
//   const evenNumbers = numberArray.filter(function (currValue, abc) {
//     return currValue % 2 === 0;
//   });
//   return evenNumbers;
// }
// console.log(filterEvenNumbers(evenNumbers));

//question 2
const oddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//filter odd numbers or divisible by 5
[1, 3, 5, 7, 9, 10, 11];
function filterEvenNumbers(numberArray) {
  const oddNumbers = numberArray.filter(function (currValue, abc) {
    return currValue % 2 !== 0 || currValue % 5 === 0;
  });
  return oddNumbers;
}
console.log(filterEvenNumbers(oddNumbers));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const student = {
  fullName: "Lakshya Yadav",
  subjects: [
    {
      name: "English",
      marks: 98,
    },
    {
      name: "Hindi",
      marks: 57,
    },
    {
      name: "Maths",
      marks: 89,
    },
    {
      name: "Science",
      marks: 76,
    },
    {
      name: "Social",
      marks: 75,
    },
  ],
};

// create a function and filter all the subjects where student has received more than or equal to 75 marks? in javascript
// [
//   {
//     name: "English",
//     marks: 98,
//   },
//   {
//     name: "Maths",
//     marks: 89,
//   },
//   {
//     name: "Science",
//     marks: 76,
//   },
//   {
//     name: "Social",
//     marks: 75,
//   },
// ];
function filterSubjects(student) {
  const filteredSubjects = student.subjects.filter((subject, index) => {
    return subject.marks >= 75;
  });

  return filteredSubjects;
}
console.log(filterSubjects(student));

// write a javascript program using html form to generate a random number  and store it in variable .  the program then takes an input from the user to tell them whether the guess was correct ,greater or lesser than the original number.
// 100-(noumber of guesses) is the score of the user the program is expected to terminate once the number is greater is guessed . number should be between 1 - 100
