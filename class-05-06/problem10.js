function FindWordLength(params) {
  let count = 0;
  for (let index in params) {
    count += params[index].length;
  }
  return count;
}

const array = ["Hi", "JS", "World"];
console.log(FindWordLength(array));
