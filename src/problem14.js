const map = { [1]: 1 };

function chain2(num) {
  if (map[num]) {
    return map[num];
  }
  if (num == 1) {
    return 1;
  }
  if (num % 2 == 0) {
    const t = num / 2;
    map[num] = 1 + chain2(num / 2);
  }
  else {
    map[num] = 1 + chain2(3 * num + 1);
  }
  return map[num];
}

function cal(max) {
  for (let i = 13; i < max; i++) {
    chain2(i);
  }
  const list = Object.keys(map).map(k => ({k, v: map[k]})).sort((a, b) => a.v - b.v);
  return list[list.length - 1].k;
}

console.time("perf");
console.log(cal(1000000));
console.timeEnd("perf");
