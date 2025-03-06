function existsHigher(arr, n) {
  // Your code here.
  console.log("arr", arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= n) {
      return true;
    }
  }
  return false;
}

module.exports = existsHigher;
