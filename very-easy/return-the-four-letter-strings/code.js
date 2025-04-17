function isFourLetters(arr) {


    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 4) {
            newArray.push(arr[i])
        }
    }

    return newArray

    // return arr.filter((x) => x.length === 4)
}

module.exports = isFourLetters;
