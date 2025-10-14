let ch = "x";

const letter =
  ch >= "A" && ch <= "Z"
    ? `${ch} is Uppercase`
    : ch >= "a" && ch <= "z"
    ? `${ch} is Lowercase`
    : `${ch} Not a letter`;

console.log(letter);
