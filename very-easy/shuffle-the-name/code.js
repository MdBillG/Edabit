function nameShuffle(str) {
  // Your code here. 
  return str.split(' ')[1] + " " + str.split(' ')[0]
  // const [firstName, lastName] = str.split(' ')
  // return `${lastName} ${firstName}`
}

module.exports = nameShuffle;
