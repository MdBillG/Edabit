function addUp(num) {
    let allNUmbers = []
    for (let i = 1; i <= num; i++) {
        allNUmbers.push(i);
    }
    console.log(allNUmbers);

    return allNUmbers.reduce((acc, num) => acc + num)
}

module.exports = addUp;
