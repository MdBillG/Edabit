function amplify(num) {
    const allNumbers = [];
    for (let i = 1; i <= num; i++) {
        if (i % 4 === 0) {
            allNumbers.push(i * 10);
        } else {
            allNumbers.push(i);
        }
    }

    return allNumbers

}

module.exports = amplify;
