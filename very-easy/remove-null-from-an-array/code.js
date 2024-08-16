function removeNull(arr) {
  // Your code here.
  return arr.filter(item => item !== null && item !== undefined);
}

module.exports = removeNull;
