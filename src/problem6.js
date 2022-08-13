function cal(max) {
  let i = 1;
  let s1 = 0;
  let s2 = 0;
  while (i <= max) {
    s1 += i * i;
    s2 += i;
    i++;
  }
  return s2 * s2 - s1;
}

console.time("perf");
console.log(cal(100));
console.timeEnd("perf");
