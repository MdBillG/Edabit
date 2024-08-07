function transform(arr) {
  return arr.map(num => {
    return num % 2 === 0 ? num - 1 : num + 1
  })
}

module.exports = transform;
