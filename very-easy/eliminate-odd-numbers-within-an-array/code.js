function noOdds(arr) {
  // Your code here.

  return arr.filter(even => even % 2 === 0)
}

module.exports = noOdds;
