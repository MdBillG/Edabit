function existsHigher(arr, n) {
  // Your code here.
  for (let num of arr) {
    if (num >= n) {
      return true
    }
  }
  return false
}

module.exports = existsHigher;
