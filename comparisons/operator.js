// Equal operator

// Double equal ==
// Only compare values

// Triple equal ===
// Compares both value and type

// Not equal !=
// Not equal !==

// > greater than
// >= grater than equal to

// < less than
// <= less than equal to

// Logical operators

// AND -> &&
// console.log(true && true)

// OR -> ||

// NOT -> !


// // let num2 = '10';
const result = lakshyaAge < hiteshAge && lakshyaAge < vishalAge && hiteshAge < vishalAge
console.log(result);
// console.log(num1 !== num2);
function calculateAverage(subject1Marks, subject2Marks) {
    if (subject1Marks < 0 || subject2Marks < 0) {
      return "Invalid marks. Marks cannot be negative.";
    }
  
    if (subject1Marks > 100 || subject2Marks > 100) {
      return "Invalid marks. Marks cannot exceed 100.";
    }
  
    let totalMarks = subject1Marks + subject2Marks;
    let averageMarks = totalMarks / 2;
    return averageMarks.toFixed(2); // Return average marks with two decimal places
  }
  
  var subject1Marks = 89;
  var subject2Marks = 70;
  
  var average = calculateAverage(subject1Marks, subject2Marks);
  console.log("The average marks between subject 1 and subject 2 is: " + average);
  



  function checkIt(number) {
    if (number % 2 === 0 && number % 3 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Example usage:
  const number = 12;
  if (checkIt(number)) {
    console.log(number + " is divisible by 2 and 3.");
  } else {
    console.log(number + " is not divisible by 2 and 3.");
  }
  