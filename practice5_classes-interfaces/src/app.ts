class Department {
  //   name: string;
  //   private readonly id: string;
  protected employees: string[] = [];

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
    return "employees: " + this.employees;
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
    console.log("admins: " + this.admins);
  }

  addEmployee(newEmployee: string): void {
    if (newEmployee.toLocaleLowerCase() !== "mahdi")
      this.employees.push(newEmployee);
  }
}

class AccountingDepartment extends ITDepartment {
  protected reports: string[] = [];
  private _lastReport: string;

  constructor(id: string) {
    super(id);
    this._lastReport = this.reports[0];
  }

  addReport(content: string) {
    this.reports.push(content);
    this._lastReport = content;
  }

  printReports() {
    console.log("reports: " + this.reports);
  }

  addAdmin(name: string): void {
    if (name.toLocaleLowerCase() !== "mahdi") this.admins.push(name);
  }

  get lastReport() {
    if (!this._lastReport) throw "we dont't have last report";
    return this._lastReport;
  }

  set lastReport(newReport: string) {
    if (!newReport) throw "last report must have value";
    this.addReport(newReport);
  }
}

//! ITDepartment !//

const it = new ITDepartment("IT1");

it.describe();

it.addEmployee("Mahdi");
it.addEmployee("Ali");
it.addEmployee("Hasan");
it.addEmployee("Saman");

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
accounting.addAdmin("mahdi2");
accounting.addEmployee("asghar");
accounting.addReport("something went wrong1");
accounting.addReport("something went wrong2");

accounting.lastReport = 'hey man'

accounting.printAdmins();
console.log(accounting.getEmployees());
accounting.printReports();
console.log(accounting.lastReport);


console.log(accounting);
