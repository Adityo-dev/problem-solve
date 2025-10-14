function SmallestNumber(numbers) {
  let smallest = numbers[0];
  for (let index in numbers) {
    if (numbers[index] < smallest) {
      smallest = numbers[index];
    }
  }
  return smallest;
}

const array = [7, 5, 8, 12, 3];
console.log("Smallest Number Is", SmallestNumber(array));
