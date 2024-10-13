var arr = [10, 20, 30, 25, 40, 50, 70, 80, 60, 75];
var target = 100;
var ans = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) ans.push([arr[i], arr[j]]);
  }
}

console.log(ans);
