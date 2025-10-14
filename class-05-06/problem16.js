function FindIndex(numbers) {
  for (let index in numbers) {
    if (numbers[index] > 5) {
      return index;
    }
  }
}

const array = [1, 3, 2, 8, 10];
console.log(FindIndex(array));
