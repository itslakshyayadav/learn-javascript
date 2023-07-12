const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Use map when you have to change in the original Array
// and map always return the same length as the original Array.

// Double the even numbers
// [1,4,3,8,5,12,7,16,9,20,11,24];

const newNumbers = numbers.map((currValue, index) => {
  if (currValue % 2 === 0) {
    return currValue * 2;
  } else {
    return currValue;
  }
});
console.log(`newNumbers`);
console.log(newNumbers);

const names = ["Vishal", "Lakshya", "Deepa"];
// const emojiNames = names.map((currValue, index) => {
//   return currValue + "🤡";
// });
// console.log(names);
// console.log(emojiNames);
console.log(greet("lakshaya"));
// Function hoisting

function greet(person) {
  return "Hi! " + person;
}

// const greet = (person) => {
//   return "Hi! " + person;
// };

// const newArr = [];
// for (let name of names) {
//   newArr.push(name + "vishal");
// }

// names.forEach((currValue, index) => {
//   console.log(currValue);
//   currValue = currValue + "Vishal";
//   console.log(currValue);
// });

console.log(`emojiNames`);
console.log(names);
