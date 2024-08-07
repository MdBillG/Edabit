function divisible(arr) {
  // Your code here.
  const sum = arr.reduce((a, b) => a + b)
  const product = arr.reduce((a, b) => a * b)
  return product % sum === 0
}

module.exports = divisible;
