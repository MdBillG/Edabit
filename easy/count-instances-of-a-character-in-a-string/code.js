function charCount(myChar, str) {
  // Your code here.

  return str.split('').filter(x => x === myChar).length
}

module.exports = charCount;
