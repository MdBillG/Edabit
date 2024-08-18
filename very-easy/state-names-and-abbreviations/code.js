function filterStateNames(arr, type) {

  if (type === "full")
    return arr.filter(x => x.length > 2)
  else
    return arr.filter(x => x.length <= 2)
}

module.exports = filterStateNames;
