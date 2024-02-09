//* Rest Parameters *//

const add = (...args: number[]) => {
  return args.reduce((prev: number, curr: number) => {
    return prev + curr;
  }, 0);
};

console.log(add(12, 2, 4, 2));
