function calcDeterminant(matrix) {
const [a,b] = matrix[0]
const[c,d]= matrix[1]
return a*d - b*c;
}



module.exports = calcDeterminant;
