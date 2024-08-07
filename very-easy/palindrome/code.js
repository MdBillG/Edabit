function checkPalindrome(str) {
  // Your code here.
  return str === str.split('').reverse().join('')
}

module.exports = checkPalindrome;
