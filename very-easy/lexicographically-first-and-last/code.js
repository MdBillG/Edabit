function firstAndLast(s) {
//     const a= [s.split('').sort().join(""),s.split('').sort().reverse().join(''),]
// return a 

function dos(s) {
    return [
        s.split('').sort().join(''),  // Sort in ascending order
        s.split('').sort().reverse().join('') // Sort in descending order
    ];
}

 return dos(s)
}
module.exports = firstAndLast;
