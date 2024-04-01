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

// const area = getCircleArea(5);
const area = getCircleArea()
  .then(function (response) {
    console.log(`area response`);
    console.log(response);
  })
  .catch((error) => {
    console.error(`area error`);
    console.error(error);
  });

console.log("area =>", area);

let age = 24;
if (age > 24) {
  console.log("The guys is at drinking age.");
} else {
  console.log("The guys is not of drinking age.");
}

console.log("bottom line in code");
