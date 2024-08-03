function findEvenNums(n) {
  // Your code here.

  let even = []
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      even.push(i)
    }
  }
  return even


}

module.exports = findEvenNums;
