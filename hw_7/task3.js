'use strict';
// Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
//   Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9. 
//   После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

function sumOfAllDigitsPrecise(number) {
  if (typeof number !== 'number') {
    throw new Error('Input is not a number');
  }

  if (number <= 9 && number >= -9) {
    return number;
  } else {
    const arrayOfDigits = number.toString().split('');
    if (arrayOfDigits[0] === '-') {
      arrayOfDigits.splice(0, 2, '-' + arrayOfDigits[1]);
    }
    const newNumber = arrayOfDigits.reduce((result, digit) => result + +digit, 0);
    return sumOfAllDigitsPrecise(newNumber);
  }
}

console.log(sumOfAllDigitsPrecise(19));
console.log(sumOfAllDigitsPrecise(191));
console.log(sumOfAllDigitsPrecise(65536));
console.log(sumOfAllDigitsPrecise(-19));
console.log(sumOfAllDigitsPrecise(0));
console.log(sumOfAllDigitsPrecise(655534366555346555655));

// Вариант ниже по максимуму использует рекурсию - большая глубина очереди, но совершенно не обеспечивает точность вычисления при больших числах

function sumOfAllDigitsSimple(number) {
  if (typeof number !== 'number') {
    throw new Error('Input is not a number');
  }

  if (number <= 9 && number >= -9) {
    return number;
  } else {
    const arrayOfDigits = number.toString().split('');
    if (arrayOfDigits[0] === '-') {
      arrayOfDigits.splice(0, 2, '-' + arrayOfDigits[1]);
    }
    const [firstDigit, ...restDigits] = arrayOfDigits;
    const newNumber = +firstDigit + +(restDigits.join(''));
    return sumOfAllDigitsSimple(newNumber);
  }
}

console.log(sumOfAllDigitsSimple(19));
console.log(sumOfAllDigitsSimple(191));
console.log(sumOfAllDigitsSimple(65536));
console.log(sumOfAllDigitsSimple(-19));
console.log(sumOfAllDigitsSimple(0));
console.log(sumOfAllDigitsSimple(6555343665553436655));