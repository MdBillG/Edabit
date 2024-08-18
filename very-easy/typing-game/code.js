function correctStream(user, correct) {
  let correct2 = []
  for (let i = 0; i < user.length; i++) {
    if (user[i] === correct[i]) {
      correct2.push(1)
    } else {
      correct2.push(-1)
    }
  }

  return correct2
}

module.exports = correctStream;
