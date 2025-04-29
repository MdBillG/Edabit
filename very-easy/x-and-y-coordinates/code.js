function convertCartesian(x, y) {
  // Your code here.
  return x.map((item, index) => [item, y[index]]);


}

module.exports = convertCartesian;
