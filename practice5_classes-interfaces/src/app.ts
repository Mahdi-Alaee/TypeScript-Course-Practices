interface greetable {
  readonly name: string;

  greet(phrase: string): void;
}

class Person implements greetable {
  readonly age: number = 17;

  constructor(public name: string) {}

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
    this.name = 'ali'; //! can do this
    this.age = 12; //! but can't do this
  }
}

let user1: greetable;

user1 = new Person("mahdi");

console.log(user1);
user1.greet("yo I am -");
// user1.name = 'mmd'; //! can't do this because of readonly property
user1.greet("yo I am -");
