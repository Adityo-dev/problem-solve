let str = "Hello";

let result = str.replaceAll(/[aeiouAEIOU]/g, "");

console.log(result);

// let str = "Hello";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//   let char = str[i].toLowerCase();
//   if (
//     char !== "a" &&
//     char !== "e" &&
//     char !== "i" &&
//     char !== "o" &&
//     char !== "u"
//   ) {
//     result += str[i];
//   }
// }

// console.log(result);
