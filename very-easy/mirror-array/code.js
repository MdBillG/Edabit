function mirror(arr) {
  // Your code here.

  let mainArray = [...arr]
  const pop = mainArray.pop()
  let reverse = mainArray.reverse()
  return [...arr, ...mainArray]

}

module.exports = mirror;
