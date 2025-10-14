function isPerfectNumber(n) {
  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  if (sum === n) {
    return "Perfect Number";
  } else {
    return "Not a Perfect Number";
  }
}

console.log(isPerfectNumber(6));
