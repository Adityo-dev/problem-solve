function DoubleEachNumber(numbers) {
  let result = [];
  for (let index in numbers) {
    result.push(numbers[index] * 2);
  }
  return result;
}

const array = [5, 12, 18, 3];
console.log(DoubleEachNumber(array));
