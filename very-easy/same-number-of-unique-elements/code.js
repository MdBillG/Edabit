function same(a1, a2) {
  // Your code here.
  return new Set(a1).size === new Set(a2).size
}

module.exports = same;
