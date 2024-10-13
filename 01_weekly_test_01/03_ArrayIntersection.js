// Array Intersection

function arrayIntersect(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set();

  for (let ele of arr2) {
    if (set1.has(ele)) set2.add(ele);
  }
  const ansArray = [...set2];

  return ansArray;
}

console.log(arrayIntersect([5, 6, 8, 7], [1, 5, 6, 0, 3, 9]));
console.log(arrayIntersect([1, 9, 2, 4, 6, 87, 55, 34], [1, 2, 87, 0, 3, 9]));
