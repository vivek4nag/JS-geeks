var s = "3[a]2[bc]";
var s1 = "2[abc]3[cd]ef";

var decodeString = function (s) {
  let stack = [];
  let currNum = 0;
  let currStr = "";

  for (let char of s) {
    if (char >= "0" && char <= "9") currNum += char;
    else if (char === "[") {
      stack.push(currStr);
      stack.push(+currNum);

      currStr = "";
      currNum = 0;
    } else if (char === "]") {
      let num = stack.pop();
      let lastStr = stack.pop();

      currStr = lastStr + currStr.repeat(num);
    } else currStr += char;
  }

  return currStr;
};
console.log(decodeString(s));
console.log(decodeString(s1));
