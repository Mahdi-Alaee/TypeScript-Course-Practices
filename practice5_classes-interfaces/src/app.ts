interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
};

let user1: Person;

user1 = {
    name: 'mahdi',
    age: 17,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

console.log(user1);
user1.greet('yo I am -')
