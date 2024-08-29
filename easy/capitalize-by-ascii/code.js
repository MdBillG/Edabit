function asciiCapitalize(str) {
  // Your code here.
  return str.split('').map(char => {
    const asciicode = char.charCodeAt(0)
    return asciicode % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
  })
    .join('')
}

module.exports = asciiCapitalize;
