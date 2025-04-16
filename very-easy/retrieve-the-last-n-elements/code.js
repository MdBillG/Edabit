function last(arr, n) {

    let result = [];

    console.log(n);

    if (n > arr.length)
        return "invalid"

    if (n === 0)
        return []


    for (let i = arr.length - n; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
}

module.exports = last;
