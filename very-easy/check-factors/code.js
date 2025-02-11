function checkFactors(factors, num) {
return factors.every(factor => num % factor === 0);
}

module.exports = checkFactors;
