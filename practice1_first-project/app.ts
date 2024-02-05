function plus(num1: number, num2: number, showResult: boolean) {
  const result = num1 + num2;
  if (showResult) 
    console.log(result);
  else 
    return num1 + num2;
}

const showResult = false;

console.log(plus(5, 5, showResult));
