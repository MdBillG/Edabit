function canCapture([yourRook, opponentsRook]) {
  // Your code here.
  const [youRookRow, youRookColumn] = [yourRook[0], yourRook[1]]
  const [opponentsRookRow, opponentsRookColumn] = [opponentsRook[0], opponentsRook[1]]

  return youRookRow === opponentsRookRow || youRookColumn === opponentsRookColumn

}

module.exports = canCapture;
