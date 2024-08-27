function getAbsSum(arr) {
  // Your code here.

  let a = arr.map(x => x < 0 ? -x : x)
  return a.reduce((x, y) => x + y)
}

module.exports = getAbsSum;
