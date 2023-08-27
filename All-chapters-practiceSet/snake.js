// let user = prompt("Enter S,W or G");
// let cpuI = Math.floor(Math.random() * 3);
// let cpu = ["S", "W", "G"][cpuI];

// const match = (cpu, user) => {
//   if (cpu === user) {
//     return "Nobody";
//   } else if (cpu === "S" && user === "W") {
//     return "cpu";
//   } else if (cpu === "S" && user === "G") {
//     return "user";
//   } else if (cpu === "G" && user === "W") {
//     return "user";
//   } else if (cpu === "G" && user === "S") {
//     return "cpu";
//   } else if (cpu === "W" && user === "S") {
//     return "user";
//   } else if (cpu === "W" && user === "G") {
//     return "cpu";
//   }
// };

// let result = match(cpu, user);
// document.write(
//   `CPU : ${cpu} </br> User : ${user} </br> The winner is : ${result}`
// );

// const arr = [5, 6, 4, 8, 2, 4, 5, 5, 9, 7, 9, 6, 3, 2];

// let len = arr.length;
// console.log(len);

// arr.length = 5;
// console.log(arr);

// const sum = arr.reduce((x, y) => x + y);
// console.log(sum);
// //
// let samevalue = new Set(arr);
// console.log([...samevalue]);

// let x = 10;
// let y = 20;
// [x, y] = [y, x];

// console.log("x = ", x, "y =", y);

let a = document.getElementsByClassName("container")[0];
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0];
  b.innerHTML = "hello world!";
};
