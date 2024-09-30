'use strict';
// Удалить дубликаты
//   - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
//   - Напишите скрипт, который убирает из массива дубликаты
//   - При удалении дубликата, длина массива должна уменьшаться

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
const arrayOfNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeDuplicates (array = []) {
  const arrayOfUniqueNumbers = [...array];

  for (const number of arrayOfUniqueNumbers) {
    while (arrayOfUniqueNumbers.indexOf(number) !== arrayOfUniqueNumbers.lastIndexOf(number)) {
      arrayOfUniqueNumbers.splice(arrayOfUniqueNumbers.lastIndexOf(number), 1);
    }
  }
  return arrayOfUniqueNumbers;
}

console.log(removeDuplicates(arrayOfNumbers));
console.log(removeDuplicates(arrayOfNumbers2));