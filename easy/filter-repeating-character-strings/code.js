function identicalFilter(arr) {
  // Your code here.
  return arr.filter(x => new Set(x).size == 1)




}

module.exports = identicalFilter;
