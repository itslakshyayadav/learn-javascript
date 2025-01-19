const getData = (dataId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
};

async function apiData() {
  console.log("fetching data 1 .... ");
  await getData(1);
  console.log("fetching data 2 .... ");
  await getData(2);
  console.log("fetching data 3 .... ");
  await getData(3);
}

apiData();
// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });
