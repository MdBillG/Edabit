function minusOne(arr) {
  // Your code here.

  let newArray = [...arr]
  console.log("object array", newArray)
  return newArray.pop()
}

module.exports = minusOne;
