function calcDeterminant(matrix) {
console.log('matrix',matrix)
const [[a,b],[c,d]] = matrix
return a*d-b*c

}



module.exports = calcDeterminant;