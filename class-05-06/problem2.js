function LargestNumber(numbers) {
  let largest = numbers[0];

  for (let index of numbers) {
    if (numbers[index] > largest) {
      largest = numbers[index];
    }
  }

  return largest;
}

const array = [1, 5, 8, 12, 3];
console.log("Largest Number Is", LargestNumber(array));
