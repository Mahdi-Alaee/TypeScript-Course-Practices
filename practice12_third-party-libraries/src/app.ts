// import lodash from "lodash";

// declare let Global: string;

// const numbers = [1, 2, 3];

// console.log(lodash.shuffle(numbers));
// console.log(Global);

//* class transformer *//
// import "reflect-metadata";
// import { plainToClass } from "class-transformer";
// import { Product } from "./product";

// const products = [
//   { title: "laptop", price: 499.99 },
//   { title: "phone", price: 299.99 },
// ];

// const plainedProducts = plainToClass(Product, products);

// for(let prd of plainedProducts){
//     console.log(prd.getInformation());
// }

//* class validator *//
import { validate } from "class-validator";
import { Product } from "./product";

const prd = new Product("laptop", 3);
validate(prd).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS");
    console.log(errors);
  } else {
    console.log(prd.getInformation());
  }
});
