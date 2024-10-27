'use strict';
// 1. Создайте класс Employee с полями:
//   firstName — имя сотрудника (строка).
//   lastName — фамилия сотрудника (строка).
//   profession — профессия сотрудника (строка).
//   Приватное поле salary — зарплата сотрудника (число).
// 2. Реализуйте геттеры и сеттеры для всех полей, включая приватное поле salary.
// 3. Реализуйте метод getFullName() — возвращающий полное имя сотрудника.
// 4. Проверьте корректную работу класса, создав несколько экземпляров и протестировав геттеры и сеттеры:
//     const emp1 = new Employee("John", "Doe", "Developer", 3000);
//     console.log(emp1.firstName); // "John"
//     emp1.salary = 3100;
//     console.log(emp1.age); // 3100

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
        if (typeof newName !== 'string') throw new Error (`${newName} must be string`);
        this._firstName = newName;
        console.log(`Successfully set first name to ${this._firstName}`);
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(newLastName) {
        if (typeof newLastName !== 'string') throw new Error (`${newLastName} must be string`);
        this._lastName = newLastName;
        console.log(`Successfully set last name to ${this._lastName}`);
    }

    get profession() {
        return this._profession;
    }
    set profession(newProfession) {
        if (typeof newProfession !== 'string') throw new Error (`${newProfession} must be string`);
        this._profession = newProfession;
        console.log(`Successfully set profession to ${this._profession}`);
    }

    get salary() {
        return this.#salary;
    }
    set salary(newSalary) {
        if (typeof newSalary !== 'number') throw new Error (`${newSalary} must be number`);
        this.#salary = newSalary;
        console.log(`Successfully set salary to ${this.#salary}`);
    }

    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}

// const emp1 = new Employee("John", "Doe", "Developer", 3000);
// console.log(emp1.firstName); // "John"
// emp1.salary = 3100;
// console.log(emp1.salary); // 3100
// console.log(emp1.getFullName());

// const emp2 = new Employee("Sarah", "Parker", "QA", 2000);
// console.log(emp2.firstName);
// emp2.salary = 2100;
// console.log(emp2.salary);

// 5. Создайте класс Company с полями:
//     title — название компании (строка).
//     phone — телефон компании (число).
//     address — адрес компании (строка).
//     Приватное поле employees — массив сотрудников (пустой массив на старте).
// 6. Реализуйте геттеры для полей title, phone, и address.
// 7. Добавьте методы:
//     addEmployee(employee) — добавляет сотрудника в массив employees с проверкой, что переданный объект является экземпляром класса Employee. (instanceOf)
//     getEmployees() - возвращает массив всех сотрудников.
// 8. Проверьте корректную работу:
//     const company = new Company("Tech Corp", "123-456", "Main Street");
//     const emp1 = new Employee("John", "Doe", "Developer", 3000);
//     const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);
//     company.addEmployee(emp1);
//     company.addEmployee(emp2);
//     console.log(company.getEmployees()); // [Employee, Employee]
// 9. Добавьте в класс Company метод getInfo(), который возвращает строку с информацией о компании вида (перенос строки сделать с \n):
// Компания: 
// Адрес:
// Количество сотрудников:

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
}

const company = new Company("Tech Corp", 123456, "Main Street");
const emp1 = new Employee("John", "Doe", "Developer", 3000);
const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees()); // [Employee, Employee]
console.log(company.getInfo());