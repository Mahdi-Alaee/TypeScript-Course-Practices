//* Rest Parameters *//

// const add = (...args: number[]) => {
//   return args.reduce((prev: number, curr: number) => {
//     return prev + curr;
//   }, 0);
// };

// console.log(add(12, 2, 4, 2));

//* Objects and Arrays Destructuring */

const numbers = [1,2,3,4];

const [num1, num2, ...remainingNumbers] = numbers;

console.log(num1, num2, remainingNumbers);


const person = {
    username: 'mahdi',
    age: 17
};

const {username: firstName, age} = person;

console.log(firstName, age);
