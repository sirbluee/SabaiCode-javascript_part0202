function factorialIterative(n) {
  if (n < 0) {
    throw new Error("Input must be a non-negative number.");
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialIterative(5));
