function correctStream(user, correct) {

    let result = []

    for (let i = 0; i, i < user.length; i++) {
        if (user[i] === correct[i]) {
            result.push(1)
        }
        else
            result.push(-1)
    }
    return result

}

module.exports = correctStream;
