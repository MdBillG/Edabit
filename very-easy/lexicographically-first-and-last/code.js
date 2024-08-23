function firstAndLast(s) {
    const sort = s.split('').sort().join('')
    const reverse = sort.split('').reverse().join('')
    return [sort, reverse]
}
module.exports = firstAndLast;
