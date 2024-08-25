function minimumRemovals(arr) {
  // Your code here.
  let sum = arr.reduce((a, b) => a + b)
  if (sum % 2 === 0) {
    return 0
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      return 1
    }
  }

}

module.exports = minimumRemovals;
