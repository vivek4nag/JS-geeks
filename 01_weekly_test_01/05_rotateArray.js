//rotate arrray by k

function rotateArray(arr, k) {
  k = k % arr.length;

  let rotate = arr.slice(-k);
  let remainder = arr.slice(0, arr.length - k);

  return rotate.concat(remainder);
}

console.log(rotateArray([1, 2, 3, 4, 5], 3));
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 32));
