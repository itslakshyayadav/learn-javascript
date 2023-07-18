// question 1
// let age = prompt("Enter  your age");
// age = Number.parseInt(age);

// const canDrive = (age) => {
//   return age >= 18 ? true : false;
// };
// if (canDrive(age)) {
//   alert("yes you can drive");
// } else {
//   alert("you cannot drive");
// }

// question 2
// let runAgain = true;
// const canDrive = (age) => {
//   return age >= 18 ? true : false;
// };

// while (runAgain) {
//   let age = prompt("Enter your age");
//   age = Number.parseInt(age);

//   if (canDrive(age)) {
//     alert("yes you can drive");
//   } else {
//     alert("you cannot drive");
//   }
//   runAgain = confirm("Do you want to play again?");
// }

// question 3
// let runAgain = true;
// const canDrive = (age) => {
//   return age >= 18 ? true : false;
// };

// while (runAgain) {
//   let age = prompt("Enter your age");
//   age = Number.parseInt(age);
//   if (age < 0) {
//     console.error("Please enter valid age");
//     break;
//   }

//   if (canDrive(age)) {
//     alert("yes you can drive");
//   } else {
//     alert("you cannot drive");
//   }
//   runAgain = confirm("Do you want to play again?");
// }s

// question 4
// let number = prompt("Enter a number");
// number = Number.parseInt(number);
// if (number > 4) {
//   location.href = "https://google.com";
// }

// question 5
// let color = prompt("Enter the page backgrond color");
// document.body.style.background = color;

console.log(document.body.firstChild);
console.log(document.body.lastChild);

let arr = Array.from(document.body.childNodes);
console.log(arr);
// Element.childNodes[0] === Element.firstChild;
// Element.childNodes[Element.childNodes.length - 1] === Element.lastChild;
