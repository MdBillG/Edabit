function divisible(arr) {

    let sumOfArray = arr.reduce((acc, curr) => acc + curr);
    let productOfArray = arr.reduce((acc, curr) => acc * curr);
    return productOfArray % sumOfArray === 0 ? true : false;


}

module.exports = divisible;
