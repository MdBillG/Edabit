function filterArray(arr) {
  // Your code here.
  let newArray = []

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'string') {
      newArray.push(arr[i])
    }
  }

  return newArray



}

module.exports = filterArray;
