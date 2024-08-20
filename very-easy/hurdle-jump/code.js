function hurdleJump(hurdles, jumpHeight) {
  // Your code here.

  const max = Math.max(...hurdles)

  return jumpHeight >= max


}


module.exports = hurdleJump;
