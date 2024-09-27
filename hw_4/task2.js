'use strict';
// Task 2
// Работа с оператором IF:

//   1. Создать переменную "minAge" и присвоить ей значение 18
//   2. Создать переменную "maxAge" и присвоить ей значение 60
//   3. Создать переменную "age", в которую вы будете вводить возраст при выполнении программы
//   4. Добавьте проверку: если тип данных в переменной age не number - вывести в консоль Incorrect data type
//   4. Создать if в котором будете проверять весь код переменной age со следующими условиями:
//     - Если age меньше чем minAge, вывести в консоль "You don't have access cause your age is " + "age" + " It's less then "
//     - Если "age" больше либо равно  minAge и меньше  maxAge, вывести в консоль "Welcome  !"
//     - Если "age" больше maxAge, вывести в консоль "Keep calm and look Culture channel".
//     - Иначе выводите "Technical work".
//   5. Проверить задание со следующими значениями в переменной age: 10, 17, 18, 19, 59, 60, 61

const minAge = 18;
const maxAge = 60;

function checkAge(age) {
  let ageStatus;

  if (typeof age !== `number` || isNaN(age)) {
    throw new Error (`Incorrect data type`);
  }
  
  if (age < minAge && age > 0) {
    ageStatus = `You don't have access cause your age is ${age} It's less then ${minAge}`;
  } else if (age >= minAge && age < maxAge) {
    ageStatus = `Welcome  !`;
  } else if (age > maxAge) {
    ageStatus = `Keep calm and look Culture channel`;
  } else {
    ageStatus = `Technical work`;
  }

  return console.log(ageStatus);
}

checkAge(10);
checkAge(17);
checkAge(18);
checkAge(19);
checkAge(59);
checkAge(60);
checkAge(61);