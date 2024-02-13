//* intersection types *//

type Admin = {
  name: string;
  departments: string[];
};

type Employee = {
  name: string;
  functions: string[];
};

type ElevatedEmployee = Admin & Employee;

let person1: ElevatedEmployee;

person1 = {
  name: "mahdi",
  departments: ["courses", "managment"],
  functions: ["developer", "team-lead"],
};

type StrAndNum = string | number;
type NumAndBool = number | boolean

type StrAndNumAndBool = StrAndNum | NumAndBool;

let variable1: StrAndNumAndBool;
variable1 = 12;

let variable2: StrAndNumAndBool;
variable2 = 'test';

let variable3: StrAndNumAndBool;
variable3 = false;