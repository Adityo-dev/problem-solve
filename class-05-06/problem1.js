function Sum(numbers) {
  let sum = 0;
  for (let index of numbers) {
    sum += numbers[index];
  }

  return sum;
}

const array = [1, 5, 8, 12, 3];

console.log(Sum(array));
