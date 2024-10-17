var s = "aabb";
var s1 = "aaabc";

function reorganise(s) {
  const charCount = {};
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  const maxHeap = [];
  for (let char in charCount) {
    maxHeap.push([char, charCount[char]]);
  }
  maxHeap.sort((a, b) => b[1] - a[1]);
  const maxFreq = maxHeap[0][1];
  if (maxFreq > Math.ceil(s.length / 2)) {
    return "";
  }
  let result = [];
  while (maxHeap.length > 1) {
    let [char1, count1] = maxHeap.shift();
    let [char2, count2] = maxHeap.shift();
    result.push(char1);
    result.push(char2);
    if (count1 - 1 > 0) {
      maxHeap.push([char1, count1 - 1]);
    }
    if (count2 - 1 > 0) {
      maxHeap.push([char2, count2 - 1]);
    }
    maxHeap.sort((a, b) => b[1] - a[1]);
  }
  if (maxHeap.length > 0) {
    result.push(maxHeap[0][0]);
  }
  return result.join("");
}

console.log(reorganise(s));
console.log(reorganise(s1));
