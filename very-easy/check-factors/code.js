function checkFactors(factors, num) {
  for (let i = 0; i < factors.length; i++) {
    if (num % factors[i] !== 0) {
      console.log(`Failed at factor ${factors[i]} for number ${num}`);
      return false;
    }
  }
  return true;
}

module.exports = checkFactors;
