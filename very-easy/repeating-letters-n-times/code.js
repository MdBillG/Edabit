function repeat(str, n) {
  // Your code here.
  let result = []
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    for (let j = 0; j < n; j++) {
      result += char
    }
  }
  return result
}

module.exports = repeat;
