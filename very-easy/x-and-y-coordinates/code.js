function convertCartesian(x, y) {
  // Your code here.
  let newArray = []
  for (let i = 0; i < x.length; i++) {
    newArray.push([x[i], y[i]])
  }
  return newArray



}

module.exports = convertCartesian;
