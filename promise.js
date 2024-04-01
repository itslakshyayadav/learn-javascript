function getCircleArea(radius) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radius) {
        const result = Math.PI * radius * radius;
        resolve(result);
      } else {
        reject({ status: 400 });
      }
    }, 2000);
  });
}

console.log("top line in code");

async function executeArea() {
  try {
    const area = await getCircleArea(4);
    console.log(`area`);
    console.log(area);

    if (area > 24) {
      console.log("Big plot size.");
    } else {
      console.log("Small plot.");
    }

    console.log("bottom line in code");
  } catch (error) {
    console.log(`error`);
    console.log(error);
  }
}

executeArea();

// const area = getCircleArea(5);
//   const area = getCircleArea()
//     .then(function (response) {
//       console.log(`area response`);
//       console.log(response);
//     })
//     .catch((error) => {
//       console.error(`area error`);
//       console.error(error);
//     });

//   console.log("area =>", area);
