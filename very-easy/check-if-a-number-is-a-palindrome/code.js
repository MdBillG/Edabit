function isPalindrome(num) {
return num.toString()=== num.toString().split('').reverse().join('');

}


module.exports = isPalindrome;
