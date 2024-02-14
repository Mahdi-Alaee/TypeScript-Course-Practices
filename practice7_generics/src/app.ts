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

//! Example 1
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return { ...objA, ...objB };
// }

// const mergedObj1 = merge({ name: "mahdi" }, { age: 17 });
// const mergedObj2 = merge({ name: "mahdi", hobbies: ['sports', 'programming'] }, { age: 17 });
// console.log(mergedObj1, mergedObj2);

//! Example 2
// interface Lengthy {
//   length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T) {
//   let describeText: string;
//   if (element.length > 0) {
//     describeText = "the length of the element is " + element.length;
//   } else describeText = "element have no length!";

//   return [element, describeText];
// }

// console.log(countAndDescribe('mahdi'));
// console.log(countAndDescribe(['mahdi', 'mohammad']));
// console.log(countAndDescribe([]));

//! Example 3
// function extractAndConvert<T, K extends string & keyof T>(obj: T, key: K) {
//   return `${key} is equal to => ` + obj[key];
// }

// console.log(extractAndConvert({ name: "mahdi" }, "name"));

//* Generic Classes *//

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return this.data;
  }
}

const stringData = new DataStorage<string>();
stringData.addItem('Mahdi');
stringData.addItem('Soheil');
stringData.addItem('Ali');
console.log(stringData.getItems());

const numberData = new DataStorage<number>();
numberData.addItem(1);
numberData.addItem(3);
numberData.addItem(5);
console.log(numberData.getItems());

