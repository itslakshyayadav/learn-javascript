const person = {
  fullName: "Lakshya Yadav",
  education: "BCA",
  father: "Ram Avatar Yadav",
  color: "Yellow",
};

for (let b in person) {
  console.log(b);
  console.log(person[b]);
}

const subjects = {
  english: 87,
  hindi: 89,
  maths: 90,
  science: 99,
  social: 78,
};

// Use for in loop to find total marks in javascript

let total = 0;

for (let a in subjects) {
  total += subjects[a];
}

console.log(total);
