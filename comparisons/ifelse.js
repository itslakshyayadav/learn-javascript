// let user2Age = 28;
// let vishalAge = 28

// console.log('Hitesh is older than Lakshya.');

// if(hiteshAge > lakshyaAge && hiteshAge < vishalAge) {
//     console.log('Hitesh is older than lakshya but younger than vishal.')
// } else if () {

// }

function printUserMarks() {
  //   let myAge = 51;
  const mymathMarksValue = document.getElementById("marks").value;
  const mathsMarks = parseFloat(mymathMarksValue);
  //   console.log(typeof myAge);
  //   console.log(myAge);
  let performance = "";
  if (mathsMarks >= 60) {
    performance = "student is passed with first division";
  } else if (mathsMarks < 60 && mathsMarks >= 50) {
    performance = "student is passed with second division ";
  } else if (mathsMarks >= 36 && mathsMarks < 50) {
    performance = "student is passed with third division";
  } else {
    performance = "student failed";
  }

  document.getElementById("result").innerHTML = performance;
}

function clearResult() {
  document.getElementById("result").innerHTML = '';
  document.getElementById("marks").value = '';
}

// --------------------------------

// const scienceMarks = 70;
// const physicsMarks = 64;

// if student has marks more than or equal to 60 in all subject
// then console
// 'Student is passed with first divison'
// else
// if marks are less than 60 but more than or equal to 50
// then second divison

// if marks more than or equal to 36 but less than 50
// third divison

// else fail

let scienceMarks = 70;
let physicsMarks = 10;
const totalMarks = scienceMarks + physicsMarks;
const averageMarks = totalMarks / 2;
console.log(averageMarks);
