function filterStateNames(arr, type) {
    return type === 'abb' ? arr.filter(x => x.length === 2) : arr.filter(x => x.length > 2)
}

module.exports = filterStateNames;
