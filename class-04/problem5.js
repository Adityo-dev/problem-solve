function ReverseDigits(num) {
  let srt = num.toString();
  let reverse = "";

  for (i = srt.length - 1; i >= 0; i--) {
    reverse += srt[i];
  }
  console.log(reverse);
}

ReverseDigits(1234);
