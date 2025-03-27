function lettersOnly(str) {
  // Your code here.
return str.replace(/[^a-zA-Z]/g,'')
}

module.exports = lettersOnly;
