function findLargestNums(arr) {
  // Your code here.
  return arr.map(x => Math.max(...x))
}

module.exports = findLargestNums;
