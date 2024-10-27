'use strict';
// Теперь, вместо того чтобы указывать профессию в объекте класса Employee, 
// создайте подклассы для разных типов сотрудников — Developer, Manager, и Designer, — которые будут наследовать класс Employee. 
// В каждом из подклассов добавьте специфические поля и методы, уникальные для этих профессий. 
// Также реализуйте методы в классе Company, позволяющие работать с разными типами сотрудников.

// 1. Создайте базовый класс Employee:
//     Поля: firstName, lastName, приватное поле salary.
//     Геттеры и сеттеры для всех полей с валидацией, аналогично Task 1 и Task 2.
//     Метод getFullName(), возвращающий полное имя сотрудника.

class Employee {
  #salary;
  constructor (firstName, lastName, salary) {
      this.firstName = firstName;
      this.lastName = lastName;
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

// 2. Создайте подклассы Developer, Manager, и Designer: Каждый из этих подклассов будет наследовать от класса Employee 
//    и добавлять свои специфические поля.

//   Подкласс Developer:
//     Поле: programmingLanguages — массив языков программирования, которыми владеет разработчик.
//     Метод addProgrammingLanguage(language: string), который добавляет новый язык программирования в массив.
//   Подкласс Manager:
//     Поле: teamSize — количество людей в команде менеджера.
//     Метод increaseTeamSize() — увеличивает количество людей в команде.
//   Подкласс Designer:
//     Поле: designTools — массив инструментов для дизайна, которыми владеет дизайнер.
//     Метод addDesignTool(tool: string) — добавляет новый инструмент в арсенал дизайнера.

class Developer extends Employee {
  constructor (firstName, lastName, salary, programmingLanguages = []) {
    super (firstName, lastName, salary);
    if (!Array.isArray(programmingLanguages) || programmingLanguages.some(language => typeof language !== 'string')) {
      throw new Error ('Invalid array of programming languages');
    }
    this.programmingLanguages = programmingLanguages;
    console.log(`Successfully set programming languages to ${this.programmingLanguages.join(', ')}`);
  }

  addProgrammingLanguage(language) {
    if (typeof language !== 'string') throw new Error ('Programming language must be string');
    if (this.programmingLanguages.find(languageInArray => languageInArray.toLowerCase() === language.toLowerCase())) {
      throw new Error (`Developer ${this._firstName} ${this._lastName} already knows language ${language}`);
    }
    this.programmingLanguages.push(language);
    console.log(`Successfully added new programming language ${language} to developer ${this._firstName} ${this._lastName}`);
  }
}

class Manager extends Employee {
  constructor (firstName, lastName, salary, teamSize) {
    super (firstName, lastName, salary);
    if (typeof teamSize !== 'number') {
      throw new Error ('Value of team size must be number');
    }
    this.teamSize = teamSize;
    console.log(`Successfully set team size to ${this.teamSize}`);
  }

  increaseTeamSize() {
    this.teamSize++;
    console.log(`Successfully increased team size of ${this._firstName} ${this._lastName} up to ${this.teamSize} people`);
  }
}

class Designer extends Employee {
  constructor (firstName, lastName, salary, designTools = []) {
    super (firstName, lastName, salary);
    if (!Array.isArray(designTools) || designTools.some(tool => typeof tool !== 'string')) {
      throw new Error ('Invalid array of design tools');
    }
    this.designTools = designTools;
    console.log(`Successfully set design tools to ${this.designTools.join(', ')}`);
  }

  addDesignTool(tool) {
    if (typeof tool !== 'string') throw new Error ('Design tool must be string');
    if (this.designTools.find(designTool => designTool.toLowerCase() === tool.toLowerCase())) {
      throw new Error (`Designer ${this._firstName} ${this._lastName} already knows tool ${tool}`);
    }
    this.designTools.push(tool);
    console.log(`Successfully added new design tool ${tool} to designer ${this._firstName} ${this._lastName}`);
  }
}

// 3. Добавьте метод getEmployeesByProfession(profession: string) возвращающий массив всех сотрудников переданной профессии
//       getEmployeesByProfession("Developer"), возвращающий массив всех разработчиков в компании.
//       getEmployeesByProfession("Manager"), возвращающий массив всех менеджеров.
//       getEmployeesByProfession("Designer"), возвращающий массив всех дизайнеров.
// 4. Добавьте валидацию в метод addEmployee класса Company, которая будет проверять имя+фамилию нового сотрудника на уникальность.
//    Добавлять сотрудника с таким же именем+фамилией как у уже имеющегося - нельзя.

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
      const employeeInCompany = this.#employees.find(hiredEmployee => hiredEmployee._firstName === employee._firstName && hiredEmployee._lastName === employee._lastName);
      if (employeeInCompany) {
        throw new Error (`Employee ${employeeInCompany._firstName} ${employeeInCompany._lastName} already hired`);
      }
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

  getEmployeesByProfession(profession) {
    if (typeof profession !== 'string') throw new Error ('Profession type must be string!');
    const professionClasses = [Developer, Manager, Designer];
    const className = professionClasses.find(singleClass => singleClass.name === profession.at(0).toUpperCase() + profession.slice(1).toLowerCase());
    if (!className) {
      throw new Error (`No persons with profession ${profession} in company`);
    }
    return this.#employees.filter(employee => employee instanceof className);
  }
}

// 5. Протестируйте функционал:
//     Создайте несколько объектов Developer, Manager, и Designer.
//     Добавьте их в компанию с помощью метода addEmployee().
//     Протестируйте добавление сотрудников с не уникальным именем и фамилией
//     Протестируйте метод getEmployeesByProfession с существующими и не существующими профессиями.

const dev1 = new Developer('Jake', 'Rustovich', 2000, ['Python', 'Java']);
dev1.addProgrammingLanguage('TS');
const dev2 = new Developer('Mike', 'Delphievich', 2500, ['TS', 'Java', 'JS']);

const mgr1 = new Manager('Tim', 'Cook', 1500, 12);
mgr1.increaseTeamSize();
const mgr2 = new Manager('Huang', 'JenHsun', 1200, 7);

const des1 = new Designer('Mary', 'Photoshopovna', 1200, ['Photoshop', 'Figma']);
des1.addDesignTool('Paint');
const des2 = new Designer('Anna', 'Rastrovna', 1300, ['Illustrator', 'Figma']);

const mgr3 = new Manager("Jake", "Rustovich", 3000, 12);
const des3 = new Designer("Mary", "Photoshopovna", 3000, ['Illustrator']);

const company = new Company("Tech Corp", 123456, "Main Street");
company.addEmployee(dev1);
company.addEmployee(dev2);
company.addEmployee(mgr1);
company.addEmployee(mgr2);
company.addEmployee(des1);
company.addEmployee(des2);
// company.addEmployee(mgr3);
// company.addEmployee(des3);

console.log(company.getEmployeesByProfession('Developer'));
console.log(company.getEmployeesByProfession('designer'));
console.log(company.getEmployeesByProfession('QA'));