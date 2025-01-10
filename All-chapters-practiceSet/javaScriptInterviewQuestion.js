// 1 - print hello world in console
console.log("hello world");

// 2 - print number 1 to 5 using a loops

for (let i = 1; i <= 5; i++) {
  console.log("using for loop", i);
}

let i = 1;
while (i <= 5) {
  console.log("using while loop", i);
  i++;
}

let j = 1;
do {
  console.log("using do while loop", j);
  j++;
} while (j <= 5);

// 3 - Write a function to add 2 numbers

function addTwoNo(a, b) {
  return a + b;
}
console.log("sum of two no.", addTwoNo(2, 2));

// 4 - calculate area of rectangle using arro function

const calculateArea = (l, w) => {
  return l * w;
};
console.log("area of rectangle", calculateArea(2, 3));

// 5 - reverse the string

let string = " ";
function resString(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    string = string + str[i];
  }
  return string;
}
console.log("resverse string using for loop - ", resString("lakshya yadav"));

const ultiString = (str) => {
  return str.split("").reverse().join("");
};
console.log("reverse string using methods - ", ultiString("dekh beta dehk"));

// 6 - write a function to check that given no. is even or odd

const checkNumber = (n) => {
  if (n % 2 == 0) {
    console.log(n, "is even number");
  } else {
    console.log(n, "is odd number");
  }
  return n;
};
console.log(checkNumber(9));

// 7 - write a program leap year or not

const isLeapYear = (year) => {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isLeapYear(2020));

// 8 - find the sum of all elements in an array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

// const a = [1, 4, 6, 2, 3];
// const b = a.filter((ele) => ele * 2);
// console.log(b);

// 9 car object

let car = {
  make: "Toyota",
  model: "Liva",
  year: 2022,
};

car.startEngine = function () {
  console.log("Engine Started");
};

car.startEngine();

// 12 make a function to find factorial

function factorial(num) {
  if ((num === 0) | (num === 1)) {
    return 1;
  } else {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact = fact * i;
    }
    return fact;
  }
}
console.log("factorial is ", factorial(6));

// 13 Random Number

function genrateRandomNumber(min, max) {
  if (min > max) {
    throw new Error("min value cannot be grater than max value");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const writeNum = genrateRandomNumber(1, 100);
console.log(`random number is ${writeNum}`);

// 14 write a function that take an array of numbers and return a new array with only the even number
// Higher order function
const newArr = [2, 12, 13, 4, 5, 7, 23, 26, 44, 33, 42];
function filterEvenNumber(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumber(newArr));
console.log(newArr);

// 15 Use map method to double all element

function doubleArrayNum(arr) {
  return arr.map((num) => num * 2);
}
console.log(doubleArrayNum(newArr));

// 16 find the largest element in an array using reduce() method

function findLargestElement(arr) {
  return arr.reduce((max, current) => (current > max ? current : max));
}
console.log("max value in array " + findLargestElement(newArr));

// 17  remove all occurrences of a specific element from array
const arr2 = [10, 10, 20, 20, 10, 30];
const target = 10;
function filterElements(arr, target) {
  return arr.filter((item) => item !== target);
}
console.log(filterElements(arr2, target));

// 18 make a function that show current date and time

function currentDateTime() {
  let currentDate = new Date();
  return currentDate.toLocaleString();
}
console.log(currentDateTime());

// 18
