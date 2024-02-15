//* Decorator Class *//

function Logger(logtext: string) {
  return (constructor: Function) => {
    console.log(logtext);
    console.log(constructor);
  };
}

//! WithTemplate 1
// function WithTemplate(hookId: string, template: string) {
//   const hookElem = document.getElementById(hookId);

//   return (_: any) => {
//     if (hookElem) {
//       hookElem.innerHTML = template;
//     }
//   };
// }

//! WithTemplate 2
function WithTemplate(hookId: string, template: string) {
  const hookElem = document.getElementById(hookId);

  return (constructor: any) => {
    if (hookElem) {
      const instance = new constructor();
      hookElem.innerHTML = `<h1>${instance.name}</h1>`;
    }
  };
}

// @Logger('Person Class - Decorator')
@WithTemplate(
  "app",
  "<h1 style='color: white; background-color: black'>Hello! I'm Person Class WithTemplate Decorator</h1>"
)
class Person {
  name: string;

  constructor(name: string = "mahdi") {
    console.log(`${name} added ...`);
    this.name = name;
  }
}

const user1 = new Person("Ali");
