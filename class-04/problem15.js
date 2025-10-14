function countSpecialCharacters(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (
      !(char >= "a" && char <= "z") &&
      !(char >= "A" && char <= "Z") &&
      !(char >= "0" && char <= "9")
    ) {
      count++;
    }
  }

  return count;
}

console.log("Special Characters:", countSpecialCharacters("Hi@JS#123"));
