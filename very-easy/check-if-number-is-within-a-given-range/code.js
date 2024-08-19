function isInRange(num, range) {
    console.log("num", num, range)

    return range.max >= num && range.min <= num
}

module.exports = isInRange;
