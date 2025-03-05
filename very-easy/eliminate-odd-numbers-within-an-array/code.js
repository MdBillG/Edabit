function noOdds(arr) {
  // Your code here.
  // return arr.filter(x=>x%2===0)
  let even=[]
  for(let i = 0;i <= arr.length;i++){
    if(arr[i]%2===0){
      even.push(arr[i])
    }
  }
  console.log("even",even)
  return even
}

module.exports = noOdds;
