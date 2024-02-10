class Department {
  //   name: string;
  //   id: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.name = name;
    // this.id = id;
  }

  describe(this: Department) {
    console.log(`Department ${this.id} : ${this.name}`);
  }

  addEmployee(newEmployee: string) {
    this.employees.push(newEmployee);
  }

  getEmployees() {
    return this.employees;
  }
}

const accounting = new Department("1", "accounting");

accounting.describe();
accounting.addEmployee("Ali");
accounting.addEmployee("Hasan");
accounting.addEmployee("Saman");
accounting.addEmployee("Mahdi");

console.log(accounting.getEmployees());
