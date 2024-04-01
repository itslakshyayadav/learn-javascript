//
// let sum = 0;
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//     sum = sum + i;
//   }
// }
// console.log("the sum of even numbers is", sum);
// // console.log(sum);
// let result = 0;
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     const square = i * i;
//     console.log("square of", i, "is", square);
//     result = result + square;
//   }
// }
// console.log("total sum of square numbers", result);

// function findFactorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// }
// const result1 = findFactorial(8);
// console.log("the factorial is", result1);

// for (let i = 0; i < 10; i++) {
//   console.log("sorry", i);
// }

// const arr = ["mango", "grapes", "orange", "apple"];
// let a = arr.indexOf("apple");
// console.log("the position of index is", a);

// const array = [1, 2, 3, 4, 5, 6];
// const array1 = [7, 8, 9];

// let result = array.concat(array1);
// console.log(result);

// let a = array.find((num) => num % 2 == 0);
// console.log(a);

// let b = array.filter((num) => num % 2 == 0);
// console.log(b);

// const array = [2, 1, 3, 4, 5, 6, 7, 8, 9, 0, 8, 6, 5, 4, 3, 2, 1];
// const arr = array.splice(0, 10);
// console.log(arr);

// let str = ["L", "A", "k", "S", "H", "Y", "A"];

// str.splice(6, 1, "G");

// console.log(str);

// const arr = ["b", "c", "a", "d"];
// let result = arr.sort();
// console.log(result);

// const fruits = ["apple", "orange", "grapes"];

// const [firstFruit, secondFruit, thirdFruit] = fruits;
// console.log(firstFruit);
// console.log(secondFruit);

// function sum() {
//   console.log(arguments);
//   console.log(arguments.length);
//   console.log(arguments[0]);
// }

// sum(1, 2, 3);

// const dateString = "2023-10-26T14:52:51.576Z";
// const date = new Date(dateString);

// const day = date.getdata();
// const month = date.toLocaleString("default", { month: "long" });
// const year = date.getFullYear();

// const formattedDate = `${day} ${month} ${year}`;

// console.log(formattedDate);

// for (let i = 1; i < 5; i++) {
//   console.log(i);
// }

// let j = 0;
// while (j < 5) {
//   console.log(j);
//   j++;
// }

// let arr = [1, 2, 3, 4, 5];

// for (let val of arr) {
//   console.log(val);
// }

const person = [
  {
    name: "lakshya",
    age: "21",
    mark: 20,
    role: "developer",
  },
  {
    name: "Hitesh",
    age: "26",
    mark: 18,
    role: "UI developer",
  },
  {
    name: "Nisha",
    age: "27",
    mark: 12,
    role: "developer",
  },
  {
    name: "Nayan",
    age: "21",
    mark: 20,
    role: "UI developer",
  },
  {
    name: "Monty",
    age: "26",
    mark: 18,
    role: " UI developer",
  },
  {
    name: "Rahul",
    age: "27",
    mark: 12,
    role: "developer",
  },
];

// const result = person.map((items) => items[1]);
// console.log(person[1].name);

// const total = person.reduce((acc, currentValue) => acc + currentValue.mark, 0);
// console.log(total);

// let sum = 0;
// for (let value of person) {
//   sum = sum + value["mark"];
// }

// console.log(sum);

// const filterData = person.filter((items) => items.role === "developer");
// console.log(filterData);

const array = [1, 2, 3, 4, 2, 3, 5, 6, 7, 6, 5, 8, 9, 2];

function findDuplicateNumber(array) {
  return array.filter((item, index) => array.indexOf(item) !== index);
}

console.log(findDuplicateNumber(array));

// function evenNumbers(arr) {
//   let newEven = [];
//   for (let i = 0; i < arr.length; i++) {
//     const current = arr[i];
//     if (current % 2 == 0) {
//       newEven.push(current);
//     }
//   }
//   return newEven;
// }

// console.log(evenNumbers(array));

// const sum = [];
// const result = array
//   .slice(0, 6)
//   .reduce((acc, curentValue) => acc + curentValue,0);
// console.log(result);

// callback hell problem

async function getdata(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      if (getNextData) {
        return getNextData();
      }
      resolve("success");
    }, 5000);
  });
}

// async await
async function getAllData() {
  console.log("fetching data 1");
  await getdata(1);
  console.log("fetching data 2");
  await getdata(2);
  console.log("fetching data 3");
  await getdata(3);
}

// console.log(getAllData());
// Promise chaining
getdata(1)
  .then((res) => {
    console.log("getting data2...");
    return getdata(2);
  })
  .then((res) => {
    console.log("getting data3...");
    return getdata(3);
  })
  .then((res) => {
    console.log(res);
  });

// Callback hell
// getdata(1, () => {
//   console.log("getting data 2 ...");
//   getdata(2, () => {
//     console.log("getting data 3 ...");
//     getdata(3, () => {
//       console.log("getting data 4 ...");
//       getdata(4);
//     });
//   });
// });

// function hello() {
//   console.log("hellow Lakshya");
// }

// setTimeout(() => {
//   hello();
// }, 10000);

// returns the state of *all* features for current user
// function fetchAllFeatures() {
// in reality, this would have been a `fetch` call:
// `fetch("/api/features/all")`
//   return new Promise((resolve) => {
//     const sampleFeatures = {
//       "extended-summary": true,
//       "feedback-dialog": false,
//     };
//     setTimeout(resolve, 100, sampleFeatures);
//   });
// }

// returns the state of *all* features for current user
// function fetchAllFeatures() {
// in reality, this would have been a `fetch` call:
// `fetch("/api/features/all")`
//   return new Promise((resolve) => {
//     const sampleFeatures = {
//       "extended-summary": true,
//       "feedback-dialog": false,
//     };
//     setTimeout(resolve, 100, sampleFeatures);
//   });
// }

// function getFeatureState(featureName) {
//   try {
//     // Fetch all features for the current user
//     const allFeatures = fetchAllFeatures();
//     // Check if the requested feature is present in the fetched features
//     if (featureName in allFeatures) {
//       // Return the state of the requested feature
//       return allFeatures[featureName];
//     } else {
//       // Feature not found, default to false (disabled)
//       return false;
//     }
//   } catch (error) {
//     console.error("Error");
//     return false;
//   }
// }

function hello() {
  console.log("hello");
}
setTimeout(() => {
  hello();
}, 2000);
