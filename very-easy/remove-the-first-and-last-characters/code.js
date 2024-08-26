function removeFirstLast(str) {
  // Your code here.\
  return str.length <= 2 ? str : str.slice(1, -1)



}

module.exports = removeFirstLast;
