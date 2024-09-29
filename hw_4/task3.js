'use strict';
// Task 3 (НЕ ОБЯЗАТЕЛЬНО)

// Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
//   преобразовываясь в number

const minAge = 18;
const maxAge = 60;

function checkAge(age) {
  let ageStatus;

  if (typeof age === `string`) {
    age = convertStringToNumber(age);
  }

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

function convertStringToNumber(age) {
  return Number(age);
}

checkAge(10);
checkAge(17);
checkAge(18);
checkAge(19);
checkAge(59);
checkAge(60);
checkAge(61);
checkAge(`10`);
checkAge(`17`);
checkAge(`18`);
checkAge(`19`);
checkAge(`59`);
checkAge(`60`);
checkAge(`61`);