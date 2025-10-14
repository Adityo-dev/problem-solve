let sentence = "I love programming";
let words = sentence.split(" ");
let longest = "";

for (let i = 0; i < words.length; i++) {
  if (words[i].length > longest.length) {
    longest = words[i];
  }
}

console.log(longest);
