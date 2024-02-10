class Department {
  name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log("department: " + this.name);
  }

  addEmployee(newEmployee: string) {
    this.employees.push(newEmployee);
  }

  getEmployees() {
    return this.employees;
  }
}

const accounting = new Department("accounting");
accounting.describe();
accounting.addEmployee("Ali");
accounting.addEmployee("Hasan");
accounting.addEmployee("Saman");
accounting.addEmployee("Mahdi");

accounting.employees[4] = "Mohsen";

console.log(accounting.getEmployees());
