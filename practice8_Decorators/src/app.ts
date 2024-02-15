//* Decorator Class *//

// function Logger(logtext: string) {
//   return (_: Function) => {
//     console.log(logtext);
//   };
// }

//! WithTemplate 1
// function WithTemplate(hookId: string, template: string) {
//   const hookElem = document.getElementById(hookId);

//   return (_: any) => {
//     console.log('WithTemplate');

//     if (hookElem) {
//       hookElem.innerHTML = template;
//     }
//   };
// }

//! WithTemplate 2
// function WithTemplate(hookId: string, template: string) {
//   const hookElem = document.getElementById(hookId);

//   return (constructor: any) => {

//     if (hookElem) {
//       const instance = new constructor();
//       hookElem.innerHTML = `<h1>${instance.name}</h1>`;
//     }
//   };
// }

// @Logger('Person Class - Decorator')
// @WithTemplate(
//   "app",
//   "<h1 style='color: white; background-color: black'>Hello! I'm Person Class WithTemplate Decorator</h1>"
// )
// class Person {
//   name: string;

//   constructor(name: string = "mahdi") {
//     console.log(`${name} added ...`);
//     this.name = name;
//   }
// }

// const user1 = new Person("Ali");

//* Property Decorators *//

function Log(targetClass: any, propertyName: string) {
  console.log("Property Decorator ...");
  console.log(targetClass, propertyName);
}

class Product {
  @Log
  title: string;

  set price(price: number) {
    if (price > 0) this._price = price;
  }

  constructor(title: string, private _price: number) {
    this.title = title;
  }

  getPriceWithTax(tax: number) {
    return this._price + tax;
  }

  setPrice(newPrice: number) {
    this.price = newPrice;
  }
}
