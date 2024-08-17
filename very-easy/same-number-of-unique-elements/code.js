function same(a1, a2) {
  // Your code here.
  const b1 = new Set(a1).size;
  const b2 = new Set(a2).size
  return b1 === b2
}

module.exports = same;
