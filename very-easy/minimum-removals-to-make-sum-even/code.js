function minimumRemovals(arr) {
  // Your code here.
  const sum = arr.reduce((a, b) => a + b, 0)

  if (sum % 2 === 0)
    return 0

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] !== 0) {
      return 1
    }
  }

}

module.exports = minimumRemovals;
