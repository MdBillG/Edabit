function toArray(str) {
  // Your code here.
  if (str === "") return []
  else
    return str.split(",").map(x => x.trim())
}

module.exports = toArray;
