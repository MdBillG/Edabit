function addUp(num) {
  // Your code here.l
  // let a = []

  // console.log("object", num)
  // for (let i = 0; i <= num; i++) {
  //   a.push(i)
  // }

  // return a.reduce((a, b) => a + b)

  return (num * (num + 1)) / 2
}

module.exports = addUp;
