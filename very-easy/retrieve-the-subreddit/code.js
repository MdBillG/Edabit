function subReddit(link) {
  // Your code here.
  const parts = link.split('/')
  return parts[4]

}

module.exports = subReddit;
