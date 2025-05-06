function percentDiff(num1, num2) {
  // Your code here.


  const difference = Math.abs(num1-num2)
  const sum = (num1+num2)/2

  return parseFloat(((difference/sum)*100).toFixed(1))
  
}

module.exports = percentDiff;
