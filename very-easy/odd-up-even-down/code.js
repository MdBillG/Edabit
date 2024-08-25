function transform(arr) {
  return arr.map(x => x % 2 !== 0 ? x + 1 : x - 1)
}


module.exports = transform;
