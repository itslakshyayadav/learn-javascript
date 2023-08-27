const numbers = [10, 20, 30, 40, 55, 60, 75, 90];

Array.prototype.myForEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i);
  }
  return 10;
};

Array.prototype.myFilter = function (fn) {
  const filterArr = [];
  for (let i = 0; i < this.length; i++) {
    const boolRes = fn(this[i], i);
    if (boolRes) {
      filterArr.push(this[i]);
    }
  }
  return filterArr;
};

// const returnResult = numbers.myForEach(function (currValue, index) {
//   console.log("currValue", currValue);
//   console.log("index", index);
// });
const returnResult = numbers.myFilter(function (currValue, index) {
  return currValue % 10 === 0;
});
console.log(`returnResult`);
console.log(returnResult);
