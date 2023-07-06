"use strict;";

// const person = {
//   fullName: "Lakshya Yadav",
//   education: "BCA",
//   age: 21,
//   father: "Ram Avatar Yadav",
//   sports: {
//     badminton: 7,
//     tt: 9,
//   },
//   isDrinker: false,
//   favDishes: ["Aloo Gobhi", "Kathal"],
// };

// console.log(person.favDishes[1]);
// console.log(person.sports.tt);
// console.log(person["sports"]["tt"]);

// person.sports["cricket"] = 5;
// console.log(person.sports);

// person["brother"] = "Monty Yadav";
// let key = "hometown";
// person[key] = "Kota";

// delete person.education;
// person.key = "Kota";
// person.age = 20;
// person.mother = "Kaushal Yadav";

// I am Lakshya Yadav, my age is 21.

function getColor(colorName) {
  if (colorName) {
    return colorName;
  }
  return "yellow";
}

const person = {
  fullName: "Lakshya Yadav",
  education: "BCA",
  father: "Ram Avatar Yadav",
  color: getColor,
};

console.log(person.fullName);
console.log(person.color("red"));

// console.log(
//   `I am ${person.fullName}, my age is ${person.age}. My father's name is ${person.father}`
// );

for (let b of "lakshya") {
  console.log(b);
}
