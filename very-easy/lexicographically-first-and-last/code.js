function firstAndLast(s) {
  const first = s.split("").sort().join("")
  const last = first.split("").reverse().join("")
  return [first, last]
}
module.exports = firstAndLast;
