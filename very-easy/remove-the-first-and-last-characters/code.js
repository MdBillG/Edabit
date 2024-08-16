function removeFirstLast(str) {
  // Your code here.\

  if (str.length <= 2) {
    return str
  }
  return str.slice(1, -1)

}

module.exports = removeFirstLast;
