function getAbsSum(arr) {
  // Your code here.
  return arr.reduce((acc, num) => acc + Math.abs(num), 0);

  // const convertingToPositive = arr.map(num => num > 0 ? num : -num);
  // console.log(convertingToPositive);

}

module.exports = getAbsSum;
