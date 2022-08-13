function win(num) {
  let orin = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ].reverse();
  return !orin.some((n) => num % n != 0);
}
function minEven() {
  let num = 20;
  while (!win(num)) {
    num += 20;
  }
  return num;
}

console.time("perf");
console.log(minEven());
console.timeEnd("perf");
