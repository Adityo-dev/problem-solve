function CountEven(numbers) {
  let count = 0;
  for (let index in numbers) {
    if (numbers[index] % 2 === 0) {
      count++;
    }
  }
  return count;
}

const array = [7, 5, 8, 12, 3, 10, 55, 30];
console.log(CountEven(array), "Even Numbers");
