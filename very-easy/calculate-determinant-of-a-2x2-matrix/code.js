function calcDeterminant(matrix) {
  // Your code here.
  console.log("mad", matrix)

  let a = matrix[0][0]
  let b = matrix[0][1]
  let c = matrix[1][0]
  let d = matrix[1][1]
  return [a * d] - [b * c]


}

module.exports = calcDeterminant;
