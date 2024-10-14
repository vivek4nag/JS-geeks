var star = 9;
var space = 0;
var n = 5;
var pattern = "";
for (let i = 1; i <= n; i++) {
  for (let sp = 1; sp <= space; sp++) {
    pattern += "  ";
  }

  for (let st = 1; st <= star; st++) {
    let temp = st;
    pattern += temp + " ";
    temp++;
  }

  if (i <= n) {
    star -= 2;
    space++;
  } else {
    star += 2;
    space--;
  }
  if (i !== n) {
    pattern += "\n";
  }
}
console.log(pattern);
