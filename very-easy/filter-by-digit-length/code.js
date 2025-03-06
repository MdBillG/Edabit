function filterDigitLength(arr, num) {

    // return arr.filter(x=>x? x.length===num:[])
    let allNUmbers= []

    for(let i=0 ;i<arr.length;i++){
        if (arr[i].toString().length ===num){
             allNUmbers.push(arr[i])                   
    }

}

return allNUmbers




}

module.exports = filterDigitLength;
