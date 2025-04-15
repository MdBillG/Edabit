function nthSmallest(arr, n) {
    if (n > arr.length)
        return undefined
    const sorting = arr.sort((a, b) => a - b)
    return sorting[n - 1]


}

module.exports = nthSmallest;
