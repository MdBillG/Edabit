function filterStateNames(arr, type) {
    // return arr.filter((item)=>arr.len)

    return type === 'abb' ? arr.filter((item) => item.length === 2) : arr.filter((item) => item.length > 2)
}

module.exports = filterStateNames;
