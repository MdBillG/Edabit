function minimumRemovals(arr) {
  // Your code he
  return arr.reduce((acc, cur) => acc + cur, 0) % 2 === 0 ? 0 : 1;
}

module.exports = minimumRemovals;
