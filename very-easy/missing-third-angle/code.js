function missingAngle(angle1, angle2) {

  const missingAngle = 180 - (angle1 + angle2)

  return missingAngle > 90 ? 'obtuse' : missingAngle < 90 ? 'acute' : 'right'



}

module.exports = missingAngle;
