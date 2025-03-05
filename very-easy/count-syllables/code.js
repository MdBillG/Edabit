function numberSyllables(word) {
let syllableCount =1

for(let i=0;i<=word.length;i++)
  if (word[i] === '-') {
    syllableCount++;
}
const syallble  = word.split('-').length
return syllableCount


}

module.exports = numberSyllables;
