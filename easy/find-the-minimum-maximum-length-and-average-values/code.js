function minMaxLengthAverage(arr) {
  // Your code here.
  const minValue = Math.min(...arr)
  const maxValue = Math.max(...arr)
  const sequnceLength = arr.length
  const averageValue = arr.reduce((a, b) => a + b, 0) / sequnceLength
  console.log("averageValue", averageValue)

  return [minValue, maxValue, sequnceLength, averageValue]
}

module.exports = minMaxLengthAverage;
