function oddProduct(arr) {
  const even = arr.filter(x => x % 2 !== 0)
  return even.reduce((a, b) => a * b)

}

module.exports = oddProduct;
