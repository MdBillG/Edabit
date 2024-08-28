function percentDiff(num1, num2) {
  // Your code here.
  const difference = Math.abs(num1 - num2)
  const average = (num1 + num2) / 2
  let percentDifference = (difference / average) * 100
  return Number(percentDifference.toFixed(1));
}

module.exports = percentDiff;
