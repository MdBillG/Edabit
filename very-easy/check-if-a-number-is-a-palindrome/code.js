function isPalindrome(num) {
    if (num < 0) return false;

    let reversed = 0;
    let original = num;

    while (num > 0) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    return original === reversed;

}


module.exports = isPalindrome;
