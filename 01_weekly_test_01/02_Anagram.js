// anagram check
var isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const s_freq = new Array(26).fill(0);
  const t_freq = new Array(26).fill(0);

  const s_charArray = s.split("");
  const t_charArray = t.split("");

  for (let ch of s_charArray) {
    s_freq[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  for (let ch of t_charArray) {
    t_freq[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < s_freq.length; i++) {
    if (s_freq[i] !== t_freq[i]) return false;
  }
  return true;
};

console.log(isAnagram("hello", "eollh")); //true
console.log(isAnagram("hellow", "eollh")); //false
