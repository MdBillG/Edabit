function toArray(str) {
    if(!str)
        return []

let newString = str.split(",")
return newString.map(s=>s.trim())



}

module.exports = toArray;
