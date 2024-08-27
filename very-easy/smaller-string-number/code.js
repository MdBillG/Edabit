function smallerNum(num1, num2) {
    if (num1.length < num2.length) {
        return num1
    }
    else if (num2.length < num1.length) {
        return num2
    }
    else
        return num1 < num2 ? num1 : num2
}
module.exports = smallerNum;
