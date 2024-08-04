function filterDigitLength(arr, num) {

  return arr.filter(n => {
    return Math.abs(n).toString().length === num
  })

}

module.exports = filterDigitLength;
