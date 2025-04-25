function same(a1, a2) {
  // Your code here.

  const uniqueA1 = new Set(a1);
  const uniqueA2 = new Set(a2);
  return uniqueA1.size === uniqueA2.size

}

module.exports = same;
