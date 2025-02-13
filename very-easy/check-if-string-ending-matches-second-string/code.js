function checkEnding(str1, str2) {
  // Your code here.
  // return str1.endsWith(str2);

  for(let i = 0; i < str2.length; i++) {
    if(str1[str1.length - str2.length + i] !== str2[i]) {
      return false;
    }
  }
return true
}

module.exports = checkEnding;
