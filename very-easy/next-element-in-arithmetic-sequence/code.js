function nextElement(arr) {
  // Your code here.
  let diff = arr[1] - arr[0]
  return arr[arr.length - 1] + diff

}

module.exports = nextElement;
