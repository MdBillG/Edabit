function mean(arr) {
  // Your code here.

 const mean=   arr.reduce((acc,curr)=> acc+curr ,0)/arr.length
 return parseFloat(mean.toFixed(2))



}

module.exports = mean;
