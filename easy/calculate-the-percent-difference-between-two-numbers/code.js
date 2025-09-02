function percentDiff(num1, num2) {
  // Formula: |a - b| / ((a + b) / 2) * 100
  const diff = Math.abs(num1 - num2);
  const avg = (num1 + num2) / 2;
  return parseFloat(((diff / avg) * 100).toFixed(1));
}

module.exports = percentDiff;
