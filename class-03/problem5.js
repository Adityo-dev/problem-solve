let str = "banana";
let charToFind = "a";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === charToFind) {
    count++;
  }
}

console.log(charToFind + " appears " + count + " times");
