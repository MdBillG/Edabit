function lettersOnly(str) {
  // Your code here.
  return str.split('').filter(char => /[a-zA-Z]/.test(char)).join('')
}

module.exports = lettersOnly;
