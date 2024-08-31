function asciiSort(arr) {
  // Your code here.
  const getAsciiSum = (word) => {
    return word.split('').reduce((sum, chr) => sum + chr.charCodeAt(0), 0)
  }
  const sum1 = getAsciiSum(arr[0])
  const sum2 = getAsciiSum(arr[1])

  console.log("asdasf", sum1, sum2)
  return sum1 < sum2 ? arr[0] : arr[1]
}

module.exports = asciiSort;
