function minusOne(arr) {
  // Your code here.
  let x
  let mutate = arr.slice();
  mutate.pop()
  return mutate
}

module.exports = minusOne;
