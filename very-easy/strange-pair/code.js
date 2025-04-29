function isStrangePair(str1, str2) {

    if (str1 === "" && str2 === "") return true;

    return (
        str1[0] === str2[str2.length - 1] &&
        str1[str1.length - 1] === str2[0]
    );
}

module.exports = isStrangePair;
