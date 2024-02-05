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

let hobbies: string[];

hobbies = ["sports", "programming"];

hobbies.forEach((hobby) => {
  console.log(hobby.toLocaleUpperCase);
    // hobby.map(); //! Error !//
});
