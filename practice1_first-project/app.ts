function plus(num1: number, num2?: number) {
  if (num2) return num1 + num2;
  return "can't plus with one number";
}

console.log(plus(5, 5));
