function isPrime(num) {
  if (num % 2 == 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
function cal(max) {
  let count = 2;
  let num = 3;
  let lastPrime = 3;
  while (count < max) {
    num += 2;
    if (isPrime(num)) {
      count++;
      lastPrime = num;
    }
  }
  return lastPrime;
}

console.time("perf");
console.log(cal(10001));
console.timeEnd("perf");