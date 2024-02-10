class Department {
  //   name: string;
  //   private readonly id: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
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

  changeIdValue(newValue: string){
    this.id = newValue; //! can't do It because of "readonly" attribute
  }
}

const accounting = new Department("1", "accounting");

accounting.describe();
accounting.changeIdValue('2');
accounting.describe();
accounting.addEmployee("Ali");
accounting.addEmployee("Hasan");
accounting.addEmployee("Saman");
accounting.addEmployee("Mahdi");

console.log(accounting.getEmployees());
