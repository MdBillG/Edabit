function isIdentical(s) {
  // Your code here.
  const firstChar = s[0]

  for (let i = 1; i < s.length; i++) {
    if (s[i] !== firstChar) {
      return false
    }
  }

  return true
}

module.exports = isIdentical;
