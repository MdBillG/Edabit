function amplify(num) {
  // Your code here.

  let a = []
  console.log("object", num)
  for (let i = 1; i <= num; i++) {
    if (i % 4 === 0) {
      a.push(i * 10)
    }
    else {
      a.push(i)
    }
  }
  console.log("a", a)
  return a
}

module.exports = amplify;
