function filterUnique(arr) {
  // Your code here.
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    const charSet = new Set();
    let isUnique = true;

    for (let j = 0; j < str.length; j++) {
      const char = str[j];
      if (charSet.has(char)) {
        isUnique = false;
        break;
      }
      charSet.add(char);
    }

    if (isUnique) {
      result.push(str);
    }
  }

  return result;


}

module.exports = filterUnique;