function SortAscending(numbers) {
  return numbers.sort((a, b) => a - b);
}

const array = [3, 1, 4, 2];
console.log(SortAscending(array));
