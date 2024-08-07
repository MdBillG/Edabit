function missingAngle(angle1, angle2) {
  // Calculate the missing angle
  const missing = 180 - (angle1 + angle2);

  if (missing < 90) {
    return "acute";
  } else if (missing === 90) {
    return "right";
  } else {
    return "obtuse";
  }
}

module.exports = missingAngle;
