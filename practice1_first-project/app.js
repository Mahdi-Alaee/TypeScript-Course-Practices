function plus(num1, num2, showResult) {
    var result = num1 + num2;
    if (showResult)
        console.log(result);
    else
        return num1 + num2;
}
var showResult = false;
console.log(plus(5, 5, showResult));
