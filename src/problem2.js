function fibo(max) {
  let p = 1;
  let q = 2;
  let sum = 2;
  while (q < max) {
    const next = p + q;
    p = q;
    q = next;
    if (q % 2 == 0) {
      sum += q;
    }
  }
  return sum;
}

console.log(fibo(4000000));
