function factorGroup(num) {
  // Your code here.

  if (Math.sqrt(num) % 1 === 0)
    return 'odd'
  else
    return 'even'

}

module.exports = factorGroup;
