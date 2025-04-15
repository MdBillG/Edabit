function checkPalindrome(str) {
  // Your code here.
  console.log("object", str.split('').reverse().join(''))

  return str === str.split('').reverse().join('');
}

module.exports = checkPalindrome;
