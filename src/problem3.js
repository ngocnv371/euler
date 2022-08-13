function maxPrimeFactor(num) {
  let n = num;
  let max = 2;
  while (n % 2 == 0) {
    n = n / 2;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    while (n % i == 0) {
      max = i;
      n = n / i;
    }
  }
  return max;
}

console.log(maxPrimeFactor(600851475143));
