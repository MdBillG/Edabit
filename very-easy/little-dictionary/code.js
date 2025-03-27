function dictionary(initial, words) {
  // Your code here.

  // return words.filter(x=>x.startsWith(initial))
  let filterWords= []
  for(let i=0;i<words.length;i++){
    let match = true

    for(let j=0;j<initial.length;j++){
      if(words[i][j] !==initial[j]){
        match =false
      }
    }
    if(match)
      filterWords.push(words[i])
  }
  return filterWords





}

module.exports = dictionary;
