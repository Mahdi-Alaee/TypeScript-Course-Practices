abstract class Department {
  //   name: string;
  //   protected readonly id: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = name;
    // this.id = id;
  }

  abstract describe(this: Department): void;

  addEmployee(newEmployee: string) {
    this.employees.push(newEmployee);
  }

  getEmployees() {
    return "employees: " + this.employees;
  }
}

class ITDepartment extends Department {
  admins: string[] = [];
  private static instence: ITDepartment;

  private constructor(id: string) {
    super(id, "ITDepartment");
  }

  describe() {
    console.log(`department =>   id: ${this.id}    |_|    name: ${this.name}`);
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

  static getInstence() {    
    if (this.instence) return this.instence;
    this.instence = new ITDepartment("IT1");
    return this.instence;
  }
}

class AccountingDepartment extends Department {
  protected reports: string[] = [];
  private _lastReport: string;
  private admins: string[] = []
  static reportsCount: number = 0;

  constructor(id: string) {
    super(id, 'accountingDepartment');
    this._lastReport = this.reports[0];
  }

  describe() {
    console.log(`department =>   id: ${this.id}    |_|    name: ${this.name}`);
  }

  addReport(content: string) {
    this.reports.push(content);
    this._lastReport = content;
    AccountingDepartment.reportsCount++;
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

  static getReportsCount() {
    return AccountingDepartment.reportsCount;
  }

  printAdmins(){
    console.log('admins: ' + this.admins);
    
  }
}

//! ITDepartment !//

const it = ITDepartment.getInstence();
const it2 = ITDepartment.getInstence();

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

accounting.lastReport = "hey man";

accounting.printAdmins();
console.log(accounting.getEmployees());
accounting.printReports();
console.log(accounting.lastReport);

console.log(AccountingDepartment.getReportsCount());
// console.log(accounting.getReportsCount); //! we cant't access to it because it is a static method
// console.log(accounting.reportsCount); //! we cant't access to it because it is a static property

console.log(accounting);
