function RemoveDigits(srt) {
  let result = "";

  for (let i = 0; i < srt.length; i++) {
    let char = srt[i];

    if (char < "0" || char > "9") {
      result += char;
    }
  }

  console.log(result);
}

RemoveDigits("abc123xyz");
