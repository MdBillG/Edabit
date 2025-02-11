function toArray(str) {
  return str === "" ? [] : str.split(",").map((x) => x.trim());
}

module.exports = toArray;
