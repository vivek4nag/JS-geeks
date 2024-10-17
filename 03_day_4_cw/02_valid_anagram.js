var s = "anagram";
var t = "nagaram";

var s1 = "anagram";
var t1 = "nagaaram";

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const freq = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    freq[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] !== 0) return false;
  }
  return true;
};

console.log(isAnagram(s, t));
console.log(isAnagram(s1, t1));

