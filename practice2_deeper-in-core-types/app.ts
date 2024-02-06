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

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
  AUTHOR = "AUTHOR",
}

let article: { title: string; desc: string; author: string }[];

article = [
  {
    title: "js-vs-java",
    desc: "let`s check the deferent between js and java",
    author: Role.ADMIN,
  },
];

if(article[0].author === Role.ADMIN){
  console.log('this article is created by admin');
}