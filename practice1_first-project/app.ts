function plus(num1: number, num2: number, showResult: boolean, phrase: string) {
  const result = num1 + num2;
  if (showResult) 
    console.log(phrase + result);
  else 
    return num1 + num2;
}

const showResult = true;

console.log(plus(5, 5, showResult, 'result: '));
