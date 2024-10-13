function stringCompression(str) {
  let strCompressed = "";
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) count++;
    else {
      strCompressed = strCompressed + str[i - 1] + count;
      count = 1;
    }
  }

  strCompressed = strCompressed + str[str.length - 1] + count;
  return strCompressed;
}

console.log(stringCompression("aaaabbddgrrfcccd"));
console.log(stringCompression("abbcccddhhhfkkiww"));
