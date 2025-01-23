console.warn("this is warning");
console.info("this is inform you");
// const getData = (dataId) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 2000);
//   });
// };

// async function apiData() {
//   console.log("fetching data 1 .... ");
//   await getData(1);
//   console.log("fetching data 2 .... ");
//   await getData(2);
//   console.log("fetching data 3 .... ");
//   await getData(3);
// }

// apiData();
// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });

const users = [
  { id: 1, name: "Lakshay", age: 22 },
  { id: 2, name: "Monti", age: 19 },
  { id: 3, name: "Hitesh", age: 27 },
  { id: 4, name: "Nisha", age: 26 },
];
console.table(users);

const { name, ...rest } = users;
console.log();
function X() {
  setTimeout(function () {
    console.log(i);
  }, 1000);
  var i = 1;
}
X();

const la = "lakshya";
console.log(la);

// Calculate final prices after applying 10% discount
const prices = [250, 645, 300, 900, 50];
const finalPrice = prices.map((item) => item - item * 0.1);
console.log(finalPrice);

const company = ["Microsoft", "Uber", "Google", "IBM", "Netflix"];
const final = company.shift();
console.log(company);

setTimeout(() => console.log("This runs once after 1 second"), 1000);
