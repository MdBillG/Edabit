function getAbsSum(arr) {
  // Your code here.

  return arr.reduce((sum,num)=>sum+Math.abs(num),0);


}

module.exports = getAbsSum;
