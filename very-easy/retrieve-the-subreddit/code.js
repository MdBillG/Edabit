function subReddit(link) {
  // Your code here.

  const url = link.split('/')
  return url[4]

}

module.exports = subReddit;
