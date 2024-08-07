function oddProduct(arr) {
  // Your code here.
  const odd = arr.filter(n => n % 2 !== 0)
  return odd.reduce((a, b) => a * b)
}

module.exports = oddProduct;
