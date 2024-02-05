function plus(num1, num2, showResult, phrase) {
    var result = num1 + num2;
    if (showResult)
        console.log(phrase + result);
    else
        return num1 + num2;
}
var showResult = true;
console.log(plus(5, 5, showResult, 'result: '));
