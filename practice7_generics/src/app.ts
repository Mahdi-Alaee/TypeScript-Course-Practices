//* Built-in Generics *//

//! Example 1
// const users: Array<string> = ["mahdi", "soheil"];

// console.log(users.join("_"));

//! Example 2
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isSuccessful = false;
//     if (isSuccessful) resolve("success message");
//     else reject("error message");
//   }, 500);
// });

// promise
//   .then((res) => {
//     console.log(res.slice(0, res.length - 3));
//   })
//   .catch((res) => {
//     console.log(res.slice(0, res.length - 3));
//   });

//* Generic Function *//

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergedObj1 = merge({ name: "mahdi" }, { age: 17 });
const mergedObj2 = merge({ name: "mahdi", hobbies: ['sports', 'programming'] }, { age: 17 });
console.log(mergedObj1, mergedObj2);
