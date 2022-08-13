function isPalindrome(num) {
  const text = num + ''
  for (let i = 0; i < text.length / 2; i++) {
    if (text[i] != text[text.length-1-i]) {
      return false;
    }
  }
  return true;
}

function maxPalid() {
  let max = 0;
  for (let p = 100; p < 999; p++) {
    for (let q = 100; q < 999; q++) {
      const product = p * q;
      if (isPalindrome(product) && product > max) {
        max = product
      }
    }
  }
  return max;
}

console.log(maxPalid());
