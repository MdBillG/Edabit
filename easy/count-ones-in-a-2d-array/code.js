function countOnes(matrix) {
  // Your code here.
  return matrix.reduce((total, row) => {
    return total + row.filter(num => num === 1).length
  }, 0)
}

module.exports = countOnes;
