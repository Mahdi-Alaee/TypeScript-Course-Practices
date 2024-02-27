// import lodash from "lodash";

// declare let Global: string;

// const numbers = [1, 2, 3];

// console.log(lodash.shuffle(numbers));
// console.log(Global);

//* class transformer *//

import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { Product } from "./product";

const products = [
  { title: "laptop", price: 499.99 },
  { title: "phone", price: 299.99 },
];

const plainedProducts = plainToClass(Product, products);

for(let prd of plainedProducts){
    console.log(prd.getInformation());
}


