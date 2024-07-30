function checkFactors(factors, num) {
  // Ensure num is positive
  if (num <= 0) {
    return false;
  }

  // Check if each factor divides num evenly
  for (let i = 0; i < factors.length; i++) {
    if (num % factors[i] !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = checkFactors;
