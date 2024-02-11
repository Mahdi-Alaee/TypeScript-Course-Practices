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
    return 'employees: ' + this.employees;
  }
}

class ITDepartment extends Department {
  admins: string[] = [];

  constructor(id: string) {
    super(id, "ITDepartment");
  }

  addAdmin(name: string) {
    this.admins.push(name);
  }

  printAdmins() {
    console.log("admins: " +  this.admins);
  }
}

class AccountingDepartment extends ITDepartment {
  reports: string[] = [];

  constructor(id: string) {
    super(id);
  }

  addReport(content: string) {
    this.reports.push(content);
  }

  printReports() {
    console.log('reports: ' + this.reports);
  }
}

//! ITDepartment !//

const it = new ITDepartment("IT1");

it.describe();

it.addEmployee("Ali");
it.addEmployee("Hasan");
it.addEmployee("Saman");
it.addEmployee("Mahdi");

it.addAdmin("mostafa");
it.addAdmin("bagher");

console.log(it.getEmployees());
it.printAdmins();

console.log(it);

console.log("------------------------------------------------");

//! AccountingDepartment !//

const accounting = new AccountingDepartment("accounting1");

accounting.describe();

accounting.addAdmin("mahdi");
accounting.addEmployee("asghar");
accounting.addReport("something went wrong1");
accounting.addReport("something went wrong2");

accounting.printAdmins();
console.log(accounting.getEmployees());
accounting.printReports();

console.log(accounting);

