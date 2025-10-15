function ConvertTOUppercase(names) {
  let result = [];
  for (let index of names) {
    result.push(names[index].toUpperCase());
  }
  return result;
}

const array = ["aditto", "dev", "barmon", "koushik"];
console.log(ConvertTOUppercase(array));
