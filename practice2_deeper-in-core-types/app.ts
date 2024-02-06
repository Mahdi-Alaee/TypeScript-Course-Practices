//* assign type to an Object *//

//! way 1
// const person: object = {
//   name: "mahdi",
//   age: 17,
// };

//! way 2
// const person: {} = {
//   name: "mahdi",
//   age: 17,
// };

//! best way
// let person: {
//     name: string;
//     age: number;
// };

// person = {
//     name: 'mahdi alaee',
//     age: 17
// };

// console.log(person);

//* assign type to an Array *//

// let hobbies: string[];

// hobbies = ["sports", "programming"];

// hobbies.forEach((hobby) => {
//   console.log(hobby.toLocaleUpperCase);
//     // hobby.map(); //! Error !//
// });

//* new type whose name is tuples *//

// type person = [string, number, string[]?];

// let testArray1: person[] = [
//   ['mahdi', 17, ['sports', 'jerk off']],
//   ['homayoon', 18, ['listen to musics', 'fucking fancy women']]
// ];

//* new type whose name is enum *//

// enum Role {
//   ADMIN = "ADMIN",
//   READ_ONLY = "READ_ONLY",
//   AUTHOR = "AUTHOR",
// }

// let article: { title: string; desc: string; author: string }[];

// article = [
//   {
//     title: "js-vs-java",
//     desc: "let`s check the deferent between js and java",
//     author: Role.ADMIN,
//   },
// ];

// if(article[0].author === Role.ADMIN){
//   console.log('this article is created by admin');
// }

//* Union Types *//

// function combine(input1: number | string, input2: number | string) {
//   let result: number | string;
//   if (typeof input1 === "number" && typeof input2 === "string")
//     result = input1 + input2;
//   else
//     result = input1.toString() + input2.toString();

//   return result;
// }

//* Literal Types *//

// function combine(
//   input1: number | string,
//   input2: number | string,
//   functionBehavior: "as-text" | "as-number"
// ) {
//   let result: number | string;

//   if (functionBehavior === "as-number") result = +input1 + +input2;
//   else result = input1.toString() + input2.toString();

//   return result;
// }

// console.log(combine(12, 8, "as-text"));

// console.log(combine("12", "8", "as-number"));

// console.log(combine("mahdi ", "alaee", "as-text"));

// console.log(combine("mahdi", "alaee", "as-number"));

//* function return types *//

function sum(n1: number, n2: number): number {
  return n1 + n2;
}

const result = sum(12, 8);

console.log(result);