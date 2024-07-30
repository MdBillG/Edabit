function isPalindrome(n) {
  // Your code here.

  const str = n.toString();

  const reverterfStr = str.split('').reverse().join('')

  return str === reverterfStr
}


module.exports = isPalindrome;
