function mul35(max) {
  let total = 0;
  for (let i = 0; i < max; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      total += i;
    }
  }
  return total;
}

console.log(mul35(10));
console.log(mul35(1000));
