class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log("department: " + this.name);
  }
}

const accounting = new Department("accounting");
accounting.describe();

const DepartmentCopy = {
  describe: accounting.describe,
  name: "DUMMY",
};
DepartmentCopy.describe();
