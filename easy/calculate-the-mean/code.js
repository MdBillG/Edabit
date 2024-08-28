function mean(arr) {
  // Your code here.
  const sum = arr.reduce((a, b) => a + b, 0);
  // Calculate the mean and round to two decimal places
  return parseFloat((sum / arr.length).toFixed(2));
}

module.exports = mean;
