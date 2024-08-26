function repeat(str, n) {
  // Your code here.
  let newString = ''
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    for (let j = 0; j < n; j++) {
      newString += char
    }
  }
  return newString
}

module.exports = repeat;
