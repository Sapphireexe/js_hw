'use strict';
// 1. Реализуйте метод findEmployeeByName(firstName: string) в классе Company, который возвращает объект сотрудника, если такой найден.
// 2. Реализуйте метод removeEmployee(firstName) в классе Company, который удаляет сотрудника по имени. 
//    Метод должен искать сотрудника по имени и, если сотрудник найден, удалять его из массива.
//    Для корретной работы создайте дополнительно приватный метод getEmployeeIndex(firstName), и используйте его в removeEmployee
// 3. Добавьте метод getTotalSalary() в классе Company, который возвращает сумму всех зарплат сотрудников.

class Company {
  #employees;
  constructor (title, phone, address) {
      if (typeof title !== 'string') throw new Error ('Company title must be string!');
      this._title = title;
      if (typeof phone !== 'number') throw new Error ('Company phone must be number!');
      this._phone = phone;
      if (typeof address !== 'string') throw new Error ('Company address must be string!');
      this._address = address;
      this.#employees = [];
  }

  get title() {
      return this._title;
  }

  get phone() {
      return this._phone;
  }
  
  get address() {
      return this._address;
  }

  addEmployee(employee) {
      if (!(employee instanceof (Employee))) throw new Error (`Employee ${employee} is not instance of class Employee`);
      this.#employees.push(employee);
      console.log(`Successfully added employee ${JSON.stringify(employee)} to employees`);
  }

  getEmployees() {
      return this.#employees;
  }

  getInfo() {
      return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    if (typeof firstName !== 'string') throw new Error ('Name of employee must be string!');
    const employee = this.#employees.find(employee => employee._firstName === firstName);
    if (!employee) throw new Error (`Can't find employee with name ${firstName}`);
    return employee;
  }

  removeEmployee(firstName) {
    this.#employees.splice(this.#getEmployeeIndex(firstName), 1);
    console.log(`Successfully removed employee ${firstName}`);
  }

  #getEmployeeIndex(firstName) {
    if (typeof firstName !== 'string') throw new Error ('Name of employee must be string!');
    const employeeIndex = this.#employees.findIndex(employee => employee._firstName === firstName);
    if (employeeIndex === -1) throw new Error (`Can't find employee with name ${firstName}`);
    return employeeIndex;
  }

  getTotalSalary() {
    return this.#employees.reduce((totalSalary, employee) => totalSalary + employee.salary, 0);
  }
}

// 4. Добавление валидации для полей сотрудника в сеттеры:
//   Employee:
//     firstName и lastName — строка от 2 до 50 символов, только латинские буквы.
//     profession — строка, не может быть пустой, только латинские буквы и пробелы.
//     salary — число, должно быть больше 0 и меньше 10000.

class Employee {
  #salary;
  constructor (firstName, lastName, profession, salary) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.profession = profession;
      this.salary = salary;
  }

  get firstName() {
      return this._firstName;
  }
  set firstName(newName) {
      if (typeof newName !== 'string') throw new Error ('New first name must be string');
      if (newName.search(/[^A-Z]/gi) !== -1) throw new Error ('New first name should contain only latin alphabet');
      if (newName.length < 2 || newName.length > 50) throw new Error ('New first name should contain from 2 to 50 characters');
      this._firstName = newName;
      console.log(`Successfully set first name to ${this._firstName}`);
  }

  get lastName() {
      return this._lastName;
  }
  set lastName(newLastName) {
      if (typeof newLastName !== 'string') throw new Error ('New last name must be string');
      if (newLastName.search(/[^A-Z]/i) !== -1) throw new Error ('New last name should contain only latin alphabet');
      if (newLastName.length < 2 || newLastName.length > 50) throw new Error ('New last name should contain from 2 to 50 characters');
      this._lastName = newLastName;
      console.log(`Successfully set last name to ${this._lastName}`);
  }

  get profession() {
      return this._profession;
  }
  set profession(newProfession) {
      if (typeof newProfession !== 'string') throw new Error (`${newProfession} must be string`);
      if (newProfession.search(/[^A-Z ]/i) !== -1) throw new Error ('New profession should contain only latin alphabet and spaces');
      if (newProfession.trim().length === 0) throw new Error ('New profession can\'t be empty');
      this._profession = newProfession;
      console.log(`Successfully set profession to ${this._profession}`);
  }

  get salary() {
      return this.#salary;
  }
  set salary(newSalary) {
      if (typeof newSalary !== 'number') throw new Error (`${newSalary} must be number`);
      if (newSalary <= 0 || newSalary >= 10000) throw new Error ('New salary should be from 0 to 10\'000');
      this.#salary = newSalary;
      console.log(`Successfully set salary to ${this.#salary}`);
  }

  getFullName() {
      return `${this._firstName} ${this._lastName}`;
  }
}

// 5. Проверьте свой код:
const emp1 = new Employee("John", "Doe", "Developer", 3000);
const emp2 = new Employee("Jane", "Smith", "Manager", 5000);
const emp3 = new Employee("Mark", "Brown", "Designer", 4000);

const company = new Company("Tech Corp", 123456, "Main Street");
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName("Jane")); // Employee { firstName: 'Jane', ... }
company.removeEmployee("John");
console.log(company.getEmployees()); // [Employee, Employee]
