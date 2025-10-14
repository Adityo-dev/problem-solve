function FindFirstEven(numbers) {
  for (let index in numbers) {
    if (numbers[index] % 2 === 0) {
      return numbers[index];
    }
  }
  return "No even number found";
}

const array = [1, 3, 7, 8, 10];
console.log(FindFirstEven(array));
