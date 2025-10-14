let num = -5;

if (num % 2 !== 0 && num > 0) {
  console.log(`${num} is Odd and Positive`);
} else if (num % 2 !== 0 && num <= 0) {
  console.log(`${num} is Odd but Not Positive`);
} else {
  console.log("Not Odd");
}
