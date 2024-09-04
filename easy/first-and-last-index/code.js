function charIndex(word, char) {
  // Your code here.

  // const firstIndex = word.indexOf(char);
  // const lastIndex = word.lastIndexOf(char);

  // if (firstIndex === -1) {
  //   return undefined;
  // }

  // return [firstIndex, lastIndex];

  let fistIndex = -1
  let lastIndex = -1
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      if (fistIndex === -1) {
        fistIndex = i
      }
      lastIndex = i
    }
  }

  if (fistIndex !== -1) {
    return [fistIndex, lastIndex];
  } else {
    return undefined;
  }
}

module.exports = charIndex;
