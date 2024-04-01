// reverse string
function reversedString(str) {
  let resString = " ";
  for (let i = str.length - 1; i >= 0; i--) {
    resString = resString + str[i];
  }
  return resString;
}
const string = "laksya yadav";
console.log("reverse string ==", reversedString(string));

const array = [
  1, 2, 2, 3, 4, 5, 3, 6, 7, 7, 8, 9, 7, 10, 11, 12, 13, 13, 14, 15,
];

//even number by for loop and filter method
function evenNumber(arr) {
  let evenNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNum.push(arr[i]);
    }
  }
  return evenNum;
}
console.log("even numbers", evenNumber(array));

function filterEvenNumber(arr) {
  const filterEven = arr.filter(function (num) {
    return num % 2 === 0;
  });
  return filterEven;
}
console.log("filter even number by filter method", filterEvenNumber(array));

// duplicate number
function duplicateNumber(arr) {
  const result = arr.filter((item, index) => arr.indexOf(item) !== index);
  return result.reduce((acc, curr) => acc + curr, 0);
}
console.log("duplicate number", duplicateNumber(array));

//max number
function maxNumber(arr) {
  return arr.reduce((cur, pre) => (cur > pre ? cur : pre));
}
console.log("max number", maxNumber(array));

//second largest
function secondLargerst(arr) {
  const secLag = arr.sort((a, b) => b - a);
  return secLag[1];
}
console.log("second Largest", secondLargerst(array));

// find missing value between two array
const completeArray = [1, 2, 3, 4, 5, 6, 7, 8];
const missingValue = [1, 2, 3];

function findMissingValue(arr1, arr2) {
  const missingVal = arr1.filter(function (elements) {
    return !arr2.includes(elements);
  });
  return missingVal;
}

console.log("missing Value", findMissingValue(completeArray, missingValue));
