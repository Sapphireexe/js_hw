'use strict';
// Создайте функцию, принимающую число n, которая при каждом вызове будет генерировать случайное число [1 - n] включительно. 
//    Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах). 
//    И так пока не переберутся все n чисел. На n + 1 вызов и далее функция должна возвращать 'All numbers were received'. 
//    Задачу решить через замыкания
//     Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 'All numbers were received'

//   Рекоммендации:
//    - Для генерации числа в границах воспользуйтесь методом:
//       function getRandomArbitrary(min, max) {
//         return Math.random() * (max - min) + min;
//       }

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getUniqueRandomNumber (n) {
  if (typeof n !== 'number') throw new Error (`Value ${n} must be number`);
  if (!Number.isInteger(n)) throw new Error (`Value ${n} must be integer`);

  const uniqueNumbers = [];
  return () => {
    if (uniqueNumbers.length < n) {
      let randomNumber;
      do {
        randomNumber = Math.round(getRandomArbitrary(1, n));
      } while (uniqueNumbers.find(existingUniqueNumber => existingUniqueNumber === randomNumber));
      uniqueNumbers.push(randomNumber);
      console.log(randomNumber);
    } else {
      console.log('All numbers were received');
    }
  }
}

const uniqueRandomNumberOf5 = getUniqueRandomNumber(5);
uniqueRandomNumberOf5();
uniqueRandomNumberOf5();
uniqueRandomNumberOf5();
uniqueRandomNumberOf5();
uniqueRandomNumberOf5();
uniqueRandomNumberOf5();
uniqueRandomNumberOf5();