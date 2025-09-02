function asciiCapitalize(str) {
  // Your co
  // de here.

// return str.split('').map((ch=>{
//   const code = ch.charCodeAt(0);
//   return code % 2===0 ?ch.toUpperCase():ch.toLowerCase()
// }))
// .join('')

let res =''

for(let i=0;i<str.length;i++){
  const ch =str[i]
  const code = ch.charCodeAt(0)
  

  if(code%2===0){
    res+=ch.toUpperCase()
  }
  else
    res+=ch.toLowerCase()
}

return res
}

module.exports = asciiCapitalize;
