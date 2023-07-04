// write a function to fetch area of a cube
// function areaOfCube

// write a function to fetch area of a sphere
// function areaOfSphere

// write a function to fetch volume of cuboid
// function volumeOfCuboid
let person = prompt("Please enter your name", "Harry Potter");

function cubeArea(l, h, w) {
  return 2 * (w * l + h * l + h * w);
}
const totalCubeArea = cubeArea(2, 2, 2);
console.log(totalCubeArea);

function sphereArea(radius) {
  return 4 * 3.14 * radius ** 2;
}
const totalSpherearea = sphereArea(2);
console.log(totalSpherearea);

function volumeCuboid(length, width, height) {
  return length * width * height;
}
const totalCuboidVolume = volumeCuboid(2, 2, 2);
console.log(totalCuboidVolume);

let age = 11;

if (age >= 18) {
  console.log("you are elegible for voting");
} else if (age >= 15) {
  console.log("but you are kid");
} else {
  console.log("sorry! you can not vote");
}
