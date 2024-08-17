function nameShuffle(str) {
  // Your code here. 
  const [firstName, LastName] = str.split(' ')
  return `${LastName} ${firstName}`
}

module.exports = nameShuffle;
