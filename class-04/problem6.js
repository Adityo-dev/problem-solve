// Use loop
function Power(base, exp) {
  let result = 1;

  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}

console.log(Power(2, 3));

// Use math.pow
function Power2(base, exp) {
  let result = Math.pow(base, exp);
  return result;
}

console.log(Power2(2, 3));
