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
  let sum = 5;
  let num = 3;
  while (num < max) {
    num += 2;
    if (isPrime(num)) {
      sum += num;
    }
  }
  return sum;
}

console.time("perf");
console.log(cal(2000000));
console.timeEnd("perf");
