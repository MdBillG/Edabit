function calcDeterminant(matrix) {
  // Your code here.
  const a = matrix[0][0]
  const b = matrix[0][1]
  const c = matrix[1][0]
  const d = matrix[1][1]
  return a * d - b * c

}

module.exports = calcDeterminant;
