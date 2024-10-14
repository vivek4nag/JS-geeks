var star = 1;
var n = 5;
for (let i = 1; i <= n * 2; i++) {
  var no = "";
  if (i <= n) {
    for (let j = i; j > 0; j--) no += j + " ";
  } else {
    for (let j = i - (i - n) * 2; j > 0; j--) no += j + " ";
  }
  console.log(no);
}
