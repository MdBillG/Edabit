function last(arr, n) {
    if (n > arr.length) {
        return 'invalid'
    }
    else if (n === 0) {
        return []
    }

    return arr.slice(-n)
}

module.exports = last;
