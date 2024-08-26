function removeNull(arr) {
  // Your code here.

  return arr.filter(x => x !== null && x !== undefined)
}

module.exports = removeNull;
