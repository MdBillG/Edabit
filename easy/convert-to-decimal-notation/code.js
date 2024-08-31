function convertToDecimal(perc) {
  // Your code here.

  return perc.map(x => parseFloat(x) / 100)
}

module.exports = convertToDecimal;
