function countUnique(s1, s2) {
  // Your code here.
  let s3 = s1 + s2
  let unique = ""
  for (let i = 0; i < s3.length; i++) {
    if (unique.includes(s3[i]) === false) {
      unique += s3[i]
    }
  }
  return unique.length

}

module.exports = countUnique;
