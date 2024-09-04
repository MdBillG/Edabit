function gcd(n1, n2) {
  // Your code here.
  let smaller = Math.min(n1, n2)
  let hcf = 1
  for (let i = 0; i <= smaller; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      hcf = i
    }
  }
  return hcf
}

module.exports = gcd;
