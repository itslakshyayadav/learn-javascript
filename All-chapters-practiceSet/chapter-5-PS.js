// question 1

// let arr0 = [1, 2, 3, 4, 5, 6, 7, 84];
// let a = prompt("Enter the value");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr0);

// question 2

// let arr1 = [1, 3, 5, 7, 9, 10, 13, 15, 17];
// let b;
// do {
//   b = prompt("Enter a number");
//   b = Number.parseInt(b);
//   arr1.push(b);
// } while (b != 0);
// console.log(arr1);

// question 3

let arr1 = [10, 3, 50, 7, 9, 60, 13, 15, 70];
let n = arr1.filter((x) => {
  return x % 10 == 0;
});
console.log(n);

//question 4
let numbers = [2, 3, 4, 5, 6, 7, 8, 9];
let nop = numbers.map((n) => {
  return n * n;
});
console.log(nop);

// question 5
let looks = [2, 3, 4, 5];
let sqr = looks.reduce((n1, n2) => {
  return n1 * n2;
});
console.log(sqr);
