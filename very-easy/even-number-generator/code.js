function findEvenNums(n) {
  // Your code here.
  let allNUmbers = []
  for(let i=2;i<=n;i++)
  {
allNUmbers.push(i)
  }
console.log(allNUmbers)
console.log("allNUmbers.filter(x=>x%2===0)",allNUmbers.filter(x=>x%2===0))
return allNUmbers.filter(x=>x%2===0)
}

module.exports = findEvenNums;
