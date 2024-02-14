//* Built-in Generics *//

//! Example 1
const users: Array<string> = ["mahdi", "soheil"];

console.log(users.join("_"));

//! Example 2
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isSuccessful = false;
    if (isSuccessful) resolve("success message");
    else reject("error message");
  }, 500);
});

promise
  .then((res) => {
    console.log(res.slice(0, res.length - 3));
  })
  .catch((res) => {
    console.log(res.slice(0, res.length - 3));
  });
