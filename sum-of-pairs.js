
function sumPairs(ints, s) {
let obj = {}
  for (let i = 0; i < ints.length; ++i) {
    if (obj[s - ints[i]]){ return [s - ints[i], ints[i]] }
    obj[ints[i]] = true
  }
  return undefined;
}


sumPairs([10, 5, 2, 3, 7, 5], 10);
//[1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8");
sumPairs([1, -2, 3, 0, -6, 1], -6);
//[0, -6], "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6");
sumPairs([20, -13, 40], -7);
//undefined, "No Match: [20, -13, 40] should return undefined for sum = -7");