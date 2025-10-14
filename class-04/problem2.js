function countUppercase(str) {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch >= "A" && ch <= "Z") {
      counter++;
    }
  }

  return counter;
}

console.log(countUppercase("HeLLo"));
