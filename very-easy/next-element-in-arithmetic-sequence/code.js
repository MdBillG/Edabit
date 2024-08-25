function nextElement(arr) {
  let dif = arr[1] - arr[0]

  return arr[arr.length - 1] + dif

}

module.exports = nextElement;
