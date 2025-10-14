function RemoveDuplicate(numbers) {
  let result = [];
  for (let index in numbers) {
    if (!result.includes(numbers[index])) {
      result.push(numbers[index]);
    }
  }
  return result;
}

const array = [10, 20, 20, 30, 40, 40];
console.log(RemoveDuplicate(array));
