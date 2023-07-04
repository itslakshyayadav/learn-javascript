console.log("vishal");
// let radius1 = 5;
// let radius2 = 10;
// let radius3 = 15;

// const pi = 3.14;

// function areaOfCircle(radius) {
//   const area = pi * radius * radius;
//   return area;
// }

// let totalArea = areaOfCircle(5);

//  areaOfCircle(20);

// const area2 = pi * radius2 * radius2;
// const area3 = pi * radius3 * radius3;

// console.log(area1);

// function addNumber(num1, num2) {
// const result = num1 + num2
// return result;
// return num1 + num2;
// }

// function add3Numbers(a, b, c) {
//     console.log('a', a)
//     console.log('b', b)
//     console.log('c', c)
//     return a + b + c
// }

// const total = addNumber(40, 78)
// const total3 = add3Numbers(15, 16, 89)
// console.log(total)
// console.log(total3)


function plotArea(l, b) {
    return l * b;
}

const plot1Area = plotArea(40, 25);
const plot2Area = plotArea(80, 40);
const plot3Area = plotArea(100, 60);

// const total = plot1Area + plot2Area + plot3Area;
const total = plotArea(40, 25) + plotArea(80, 40) + plotArea(100, 60);
console.log(total)
