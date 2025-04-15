function transform(arr) {
    let newArray = []
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArray.push(arr[i] + 1);
        } else {
            newArray.push(arr[i] - 1);
        }
        return newArray

    }

}


module.exports = transform;
