function getExtension(arr) {
  // Your code here.

  return arr.map(x => x.split('.').pop())

}

module.exports = getExtension;
