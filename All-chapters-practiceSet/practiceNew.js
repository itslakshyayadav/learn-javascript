// //question 1
// //suare root
// const numbers = [2, 3, 8, 6, 12];
// const num2 = [10, 11, 18, 4, 5];
// const square = [];
// for (let i = 0; i < numbers.length; i++) {
//   //   console.log("i", numbers);
//   square.push(numbers[i] ** 2);
// }
// console.log(square);

// function squareOfArray() {}

// // const result = num2.map((val) => val ** 2);
// // console.log(result);

// //question 2
// let sum = 0;
// for (let value of numbers) {
//   sum = sum + value;
// }
// console.log("sum is ", sum);

// let total = 0;
// for (let i = 0; i < num2.length; i++) {
//   total = total + num2[i];
// }
// console.log("sum is ", total);

// //question 3

// const res = [...numbers, ...num2];
// console.log("new array", res);

// //question 4

// const max = Math.max(...numbers);
// console.log("max number is", max);

// const mini = Math.min(...numbers);
// console.log("mini number is", mini);

// let double = [];
// for (let i = 0; i < numbers.length; i++) {
//   double.push(numbers[i] ** 2);
//   //   console.log("ii", i);
// }
// console.log("square", double);

// function findLargestNumber(arr) {
//   let largest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// const rese = findLargestNumber(numbers);
// console.log("the largest number is", rese);

// function findSmallestNumber(arr) {
//   let smallest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// }

// const response = findSmallestNumber(numbers);
// console.log("the smallest number is", response);

// const sumreduce = numbers.reduce((acc, currentValue) => acc + currentValue);
// console.log("the sum is", sumreduce);

// function findFactorial(n) {
//   let fact = 1;
//   for (let i = 1; i <= n; i++) {
//     fact = fact * i;
//   }
//   return fact;
// }

// const result = findFactorial(8);
// console.log(result);

// let add = [];
// for (let i = 0; i < numbers.length; i++) {
//   add.push(numbers[i] ** 2);
// }
// console.log(add);

// let tot = 0;
// for (let i = 0; i < numbers.length; i++) {
//   tot = tot + numbers[i];
// }
// console.log(tot);

// const arr = [2, 3, 4, 5, 6, 7, 8, 9];

// const evenNumbers = arr.filter((number) => number % 2 === 0);

// console.log(evenNumbers);

// for (let i = 1; i <= 100; i++)  {
//   console.log("sorry", i);
// }

// const arr = [2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 1) {
//     sum = sum + arr[i];
//   }
// }
// console.log(sum);

// const result = arr.reduce((acc, currentValue) => acc + currentValue, 0);
// console.log(result);

// function isPrime(number) {
//   // Check if the number is less than 2
//   if (number < 2) {
//     return false;
//   }

//   // Check for divisibility from 2 to the square root of the number
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       // If the number is divisible by any other number, it's not prime
//       return false;
//     }
//   }

//   // If the loop completes without finding a divisor, the number is prime
//   return true;

// Example usage
// const numToCheck = 13; // Change this to the number you want to check
// if (isPrime(numToCheck)) {
//   console.log(`${numToCheck} is a prime number.`);
// } else {
//   console.log(`${numToCheck} is not a prime number.`);
// }

// myFunction();

// function myFunction() {
//   console.log("lakshya");
// }

// const name = "lakshya";

// const arr = [2, 3, 4, 5, 6, 7, 8, 9];
// const filter = arr.filter((num) => num % 2 === 0);
// console.log(filter);
// function greetWithDelay(personName) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Hi ${personName}`);
//     }, 3000);
//   });
// }

// greetWithDelay("John")
//   .then((greeting) => {
//     console.log(greeting);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const resStr = "lakshya yadav";

// function reverseArray(arr) {
//   let reverseArray = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverseArray.push(arr[i]);
//   }

//   return reverseArray;
// }

// let myString = [1, 2, 3, 4, 5, 6, 7];
// let reversed = reverseArray(myString);

// console.log(reversed);

// function reversedString(str) {
//   let reversedString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedString = reversedString + str[i];
//   }
//   return reversedString;
// }

// const result = reversedString(resStr);
// console.log(result);

// function ultaKaroString(str) {
//   return str.split("").reverse().join("");
// }
// let res = "lakshyayadavisverygoodboy";
// console.log(ultaKaroString(res));

let array = [1, 2, 3, 4, 5, 6, 6, 4, 3, 7];

//max number of array
function maxNumber(arr) {
  return arr.reduce((max, curr) => (curr < max ? curr : max), arr[0]);
}
console.log("Maximum number is", maxNumber(array));

// sum of array

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log("sum of array", sumOfArray(array));

// sum of even number of the array

function sumEvenNum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}
console.log("sum of even numbers", sumEvenNum(array));

//find duplicate number of the array

function duplicateValue(arr) {
  const res = arr.filter((items, index) => arr.indexOf(items) !== index);
  return res.reduce((acc, curr) => acc + curr, 0);
}
console.log("dupplicate value sum", duplicateValue(array));

// square of the array elements

function squareOfArrayElements(arr) {
  let square = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      square.push(arr[i] ** 2);
    }
  }
  return square;
}
console.log(squareOfArrayElements(array));

// swap value of two vraibles

// let a = 10;
// let b = 5;

// // a = a + b;
// // b = a - b;
// // a = a - b;
// //or
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
// console.log("a", a);
// console.log("b", b);

// using  3rd vraibles

let s = 12;
let r = 10;
let temp = s;
s = r;
r = temp;
console.log("s", s);
console.log("r", r);

// find factorial

function findFactorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(findFactorial(8));
