function evenOddPartition(arr) {
  let odd = []
  let even = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd.push(arr[i])
    }
    else {
      even.push(arr[i])

    }
  }
  return [even, odd];

}

module.exports = evenOddPartition;
