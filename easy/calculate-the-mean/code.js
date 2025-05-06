function mean(arr) {
  // Your code here.

  return parseFloat((arr.reduce((acc, cur) => acc + cur, 0) / arr.length).toFixed(2));


}

module.exports = mean;
