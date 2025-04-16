function repeat(str, n) {
  // Your code here.

  return str.split('').map(x => x.repeat(n)).join('');



}

module.exports = repeat;
