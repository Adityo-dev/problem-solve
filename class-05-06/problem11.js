function FindSpecificElement(numbers, value) {
  for (let index in numbers) {
    if (numbers[index] === value) {
      return index;
    }
  }

  return "The number is not correct";
}

const array = [10, 20, 30, 40];
const value = 30;

console.log(FindSpecificElement(array, value));
