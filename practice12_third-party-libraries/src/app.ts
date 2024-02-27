import lodash from "lodash";

declare let Global: string;

const numbers = [1, 2, 3];

console.log(lodash.shuffle(numbers));
console.log(Global);

