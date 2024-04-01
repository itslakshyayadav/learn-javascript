const array = [1, 2, 4, 5, 6, 8, 9, 3, 2, 5, 1];
// const array = [2, 2, 3, 3, 4, 4];

// duplicate elements in array
function duplicateNumber(arr) {
  const result = arr.filter((item, index) => arr.indexOf(item) !== index);
  return result.reduce((acc, curr) => acc + curr, 0);
}
console.log("Q1 = duplicate number sum", duplicateNumber(array));

// maximum and minimum number find
function maxNumber(arr) {
  return arr.reduce((pre, curr) => (curr > pre ? curr : pre)); // reverse for minimum
}
console.log("Q2 = maximum number is", maxNumber(array));

//  find second largest number in array
function secondLargest(arr) {
  const secondLag = arr.sort((a, b) => b - a);
  return secondLag[1];
}
console.log("Q3 = second largest number ", secondLargest(array));

// filter method
function filterEvenNumber(arr) {
  const evenNumbers = arr.filter(function (num) {
    return num % 2 === 0;
  });
  return evenNumbers;
}
console.log("Q4 = filter even number", filterEvenNumber(array));

// find method
function findEvenNumber(arr) {
  return arr.find((item) => item % 2 === 0);
}
console.log("Q4 = find even number", findEvenNumber(array));

// find missing value of the array elements
const completeArr = [1, 2, 3, 4, 5, 6];
const missingArr = [1, 3, 5];

function missingValues(arr1, arr2) {
  const missingValue = arr1.filter(function (elements) {
    return !arr2.includes(elements);
  });
  return missingValue;
}
console.log(
  "Q5 = missing values between two arrays",
  missingValues(completeArr, missingArr)
);

// find even number
function findEven(arr) {
  const even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
  }
  return even;
}
console.log("Q6 = even number in array", findEven(completeArr));

// find sum of all elements in given array
function sumOfArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log("Q7 = sum of array elements", sumOfArrayElements(array));

// find factorial of given number
function findFactorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log("Q8 = find factorial", findFactorial(8)); // 40320

//  find prime number
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const num = 4;
if (isPrime(num)) {
  console.log(`${num} is a prime number`);
} else {
  console.log(`${num} is not a prime number`);
}

// find  vowles in a sting
function findVowles(str) {
  const vowles = "aeiouAEIOU";
  let vowlesCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowles.includes(str[i])) {
      vowlesCount++;
    }
  }
  return vowlesCount;
}

const myString = "lakshya , hello";
console.log("Q9 = the vowles of string", findVowles(myString));

// how to reverse the string
function reversedString(str) {
  let string = " ";
  for (let i = str.length - 1; i >= 0; i--) {
    string = string + str[i];
  }
  return string;
}

console.log("Q11 = the reverse of string is", reversedString(myString));

// table
function table(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${i * n}`);
  }
}

console.log(table(5));

// check string is palindrome
function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
}
const exampleString = "A man, a plan, a canal, Panama!";
const result = isPalindrome(exampleString);

console.log("Q12 = the string is plaindrome", result);

// swap to value without using 3rd variable
let a = 10;
let b = 12;

a = a + b;
b = a - b;
a = a - b;

console.log("Q13 = swap variables", a);

// merge 2 array in sigle array
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const merge = [...array1, ...array2];
console.log("Q13 = merge two array", merge);

// facots of given  number
function factorNum(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    } else if (n <= 0) {
      console.log("negative number not valid");
    }
  }
}
factorNum(15);
