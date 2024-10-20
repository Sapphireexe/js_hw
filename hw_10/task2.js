'use strict';
// У вас есть массив чисел. 
// Напиши функцию countOccurrences, которая принимает массив чисел и возвращает объект с подсчётом каждого числа.

const numbers = [1, 2, 2, 3, 4, 4, 4, 5];

// Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }

// function countOccurrences(arr) {
//   const object = {};
//   for (const number of arr) {
//     number in object ? object[number]++ : object[number] = 1;
//   }
//   return object;
// }

// function countOccurrences(arr) {
//   return arr.reduce((obj, number, index, array) => {
//     if (!(number in obj)) {
//       obj[number] = array.filter(el => el === number).length;
//     }
//     return obj;
//   }, {});
// }

function countOccurrences(arr) {
  const object = {};
  arr.map(number => {
    number in object ? object[number]++ : object[number] = 1;
  });
  return object;
}

console.log(countOccurrences(numbers));