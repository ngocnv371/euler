function isValid(a, b, c) {
  return a * a + b * b == c * c;
}
function cal(max) {
  let s = max;
  for (let a = 1; a < s; a++) {
    for (let b = 1; b < s; b++) {
      for (let c = 1; c < s; c++) {
        if (a + b + c == max) {
          if (isValid(a, b, c)) {
            return a * b * c;
          }
        }
      }
    }
  }
  return 0;
}

console.time("perf");
console.log(cal(1000));
console.timeEnd("perf");
