function getExtension(arr) {
  // Your code here.
  return arr.map(extension => {
    return extension.split('.').pop()
  })
}

module.exports = getExtension;
