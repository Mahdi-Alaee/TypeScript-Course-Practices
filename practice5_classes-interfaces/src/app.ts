interface greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements greetable {
  age: number = 17;

  constructor(public name: string) {}

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

let user1: greetable;

user1 = new Person("mahdi");

console.log(user1);
user1.greet("yo I am -");
