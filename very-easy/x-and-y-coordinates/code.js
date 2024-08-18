function convertCartesian(x, y) {
  // Your code here.

  const r = []

  for (let i = 0; i < x.length; i++) {
    r.push([x[i], y[i]])
  }

  return r


}

module.exports = convertCartesian;
