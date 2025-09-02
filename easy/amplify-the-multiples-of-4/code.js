function amplify(num) {

    // first we will return the array
    const newArray =[]
    for(let i =1 ; i<=num; i++){
        if(i%4===0){
           newArray.push(i*10)
        }
        
       else{
    newArray.push(i)
       }
    }
    return newArray
}

module.exports = amplify;
