function countdown(start) {
  // Your code here.

  let numbers = []
  for (let i = start; i >= 0; i--) {
    numbers.push(i)
  }
  console.log("object", "numbers", numbers)

  return numbers


}

module.exports = countdown;
