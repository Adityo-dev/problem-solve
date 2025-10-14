function isPrime(num) {
  if (num <= 1) {
    console.log("Not a Prime Number");
    return;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log("Not a Prime Number");
      return;
    }
  }

  console.log("Prime Number");
}

isPrime(7);
