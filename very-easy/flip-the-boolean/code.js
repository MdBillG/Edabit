function reverse(bool) {
    if (bool === true)
        return false
    else if (bool === false)
        return true
    return "boolean expected"
}

module.exports = reverse;
