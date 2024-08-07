function nthSmallest(arr, n) {
  arr.sort((a, b) => a - b);

  if (n <= 0 || n > arr.length) {
    return null;
  }

  return arr[n - 1];
}

module.exports = nthSmallest;
