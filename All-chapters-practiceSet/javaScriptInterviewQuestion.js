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

const a = [1, 4, 6, 2, 3];
const b = a.filter((ele) => ele % 2 === 0);
console.log(b);
