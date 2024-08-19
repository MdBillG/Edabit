function isIdentical(s) {

    let n = s.length
    for (let i = 1; i < n; i++) {
        if (s[i] !== s[0])
            return false


    }
    return true

}

module.exports = isIdentical;
