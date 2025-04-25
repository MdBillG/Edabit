function same(a1, a2) {
  // Your code here.

  // const uniqueA1 = new Set(a1);
  // const uniqueA2 = new Set(a2);
  // return uniqueA1.size === uniqueA2.size
  let uniqueElementsinA1 = []
  let uniqueElementsinA2 = []


  for (let i = 0; i < a1.length; i++) {
    if (!uniqueElementsinA1.includes(a1[i])) {
      uniqueElementsinA1.push(a1[i]);
    }
  }
  for (let i = 0; i < a2.length; i++) {
    if (!uniqueElementsinA2.includes(a2[i])) {
      uniqueElementsinA2.push(a2[i]);
    }
  }
  return uniqueElementsinA1.length === uniqueElementsinA2.length
}

module.exports = same;
