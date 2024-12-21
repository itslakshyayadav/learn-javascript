//find factorial
function findFactorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * findFactorial(n - 1);
}

console.log("factorial of is", findFactorial(5));

// using for loop

function findFact(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log("factorial of is", findFact(5));
