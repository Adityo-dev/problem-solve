function GenerateRandomOddNumber() {
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * 50 + 1);
  } while (randomNumber % 2 !== 0);

  console.log("Random Odd Number:", randomNumber);
}

GenerateRandomOddNumber();
