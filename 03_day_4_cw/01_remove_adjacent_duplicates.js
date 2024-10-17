let str = "azxxzy";
let str1 = "aauhfjjjsgkkkj";
let str2 = "gghbbrrt"

var removeDuplicates = function (s) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (arr.length === 0 || arr[arr.length - 1] !== s.charAt(i)) {
      arr.push(s.charAt(i));
    } else {
      arr.pop();
    }
  }
  return arr.join("");
};

console.log(removeDuplicates(str));
console.log(removeDuplicates(str1));
console.log(removeDuplicates(str2));
