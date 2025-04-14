function mirror(arr) {
  // Your code here.
  const result = [...arr]
  for (let i = arr.length - 2; i >= 0; i--) {
    result.push(arr[i])
  }
  return result


}

module.exports = mirror;
