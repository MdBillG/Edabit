function canCapture([yourRook, opponentsRook]) {
  // Your code here.

  return yourRook[0] === opponentsRook[0] || yourRook[1] === opponentsRook[1]


}

module.exports = canCapture;
