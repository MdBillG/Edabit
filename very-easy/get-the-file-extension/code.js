function getExtension(arr) {
  // Your code here.
 return arr.map(extension=>extension.split('.').pop())
}

module.exports = getExtension;
