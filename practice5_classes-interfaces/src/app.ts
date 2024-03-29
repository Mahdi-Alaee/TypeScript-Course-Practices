interface twoNumsFunc {
  (num1: number, num2: number): number;
}

let add: twoNumsFunc;

add = (n1: number, n2: number) => n1 + n2;

console.log(add(12, 8));









interface named {
  readonly name: string;
}

interface greetable extends named {
  greet(phrase: string): void;
}

class Person implements greetable {
  readonly age: number = 17;

  constructor(public name: string) {}

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
    // this.name = 'ali'; //! can do this
    // this.age = 12; //! but can't do this
  }
}

let user1: greetable;

user1 = new Person("mahdi");

console.log(user1);
user1.greet("yo I am -");
// user1.name = 'mmd'; //! can't do this because of readonly property
user1.greet("yo I am -");
