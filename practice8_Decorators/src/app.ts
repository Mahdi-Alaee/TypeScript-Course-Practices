//* Decorator Class *//

function Logger(logtext: string) {
    return (constructor: Function) => {
        console.log(logtext);
        console.log(constructor);
    }
}

@Logger('Person Class - Decorator')
class Person {
  name: string;

  constructor(name: string) {
    console.log(`${name} added ...`);
    this.name = name;
  }
}

const user1 = new Person("mahdi");
