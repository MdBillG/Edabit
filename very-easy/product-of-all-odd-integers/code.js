function oddProduct(arr) {

    return arr.filter((num) => num % 2 !== 0).reduce((acc, curr) => acc * curr)
}

module.exports = oddProduct;
