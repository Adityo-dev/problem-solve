function numbersGreaterThanTen(numbers) {
  let result = [];

  for (let index in numbers) {
    if (numbers[index] > 10) {
      result.push(numbers[index]);
    }
  }

  return result;
}

const array = [5, 12, 18, 3];
console.log(numbersGreaterThanTen(array));
