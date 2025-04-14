function nextElement(arr) {


    const diff = arr[1] - arr[0];
    return arr[arr.length - 1] + diff;

}

module.exports = nextElement;
