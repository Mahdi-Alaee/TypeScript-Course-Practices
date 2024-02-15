//* Decorator Class *//

function Logger(con: Function) {
  console.log("logging ...");
  console.log(con);
}

@Logger
class Person {
  name: string;

  constructor(name: string) {
    console.log(`${name} added ...`);
    this.name = name;
  }
}

const user1 = new Person("mahdi");
