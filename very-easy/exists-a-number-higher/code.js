function existsHigher(arr, n) {
  // Your code here.

  const max = Math.max(...arr)
  return n > max ? false : true
}

module.exports = existsHigher;
