function repeat(item, times) {

    let repeatedArray = [];
    for (let i = 0; i < times; i++) {
        repeatedArray.push(item);
    }


    return repeatedArray;

    // return item.repeat(times).split(',');


}

module.exports = repeat;
