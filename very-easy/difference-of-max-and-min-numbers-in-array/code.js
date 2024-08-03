function differenceMaxMin(arr) {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  return max - min
}

module.exports = differenceMaxMin;
