function removeNull(arr) {
  // Your code here.

  if (arr === undefined)
    return [];
  return arr.filter((item) => item !== undefined)

}

module.exports = removeNull;
