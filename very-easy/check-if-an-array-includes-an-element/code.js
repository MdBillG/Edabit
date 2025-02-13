function check(arr, el) {
  // Your code here.

  // modren javascript
  // return arr.includes(el);

  // for loop

for(let i = 0; i < arr.length; i++){
  if(arr[i] === el){
    return true;
  } 
}
return false
}


module.exports = check;
