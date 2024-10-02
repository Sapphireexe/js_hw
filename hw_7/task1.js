'use strict';
// 1. Бесконечные аргументы
//   - Напишите функцию, принимающую на вход любое количество массивов
//   - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
//   - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
//   - Решить с использованием Spread operator

function mergeArrays(...arrays) {
  const mergedArrays = [];
  
  mergedArrays.push(...arrays.flat(Infinity));

  return mergedArrays;
}

console.log(mergeArrays([1,2], [3,4], [5,6]));
console.log(mergeArrays([1, 2], 10, 5, [3, [2, 3, [8, 9]]], [5, 6]));

// 2. Devide by _
//   - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
//   - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
//   - Пример: I am super engineer => i_Am_Super_Engineer

function makeMixOfSnakeAndCamelCase(string = '') {
  const inputArray = string.toLowerCase().split(' ');

  const outputString = inputArray.map((word, i) => {
    if (i !== 0) {
      word = word[0].toUpperCase() + word.slice(1);
    }
    return word;
  }).join('_');

  return outputString;
}

console.log(makeMixOfSnakeAndCamelCase('I am super engineer'));

// 3. Фибаначчи
//   - Напишите функцию fibanacci(n), возвращающую энное число Фибоначчи
//   - числа Фибоначчи (строка Фибоначчи) — числовая последовательность, первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
//   - Например fibanacci(8) //21

function fibanacci(n) {
  const fibanacciNumbers = [0, 1];

  let i = 1;

  while (i < n) {
    const [a, b] = fibanacciNumbers;
    fibanacciNumbers.splice(0, 2, b, a + b);
    i++;
  }

  return n ? fibanacciNumbers[1] : fibanacciNumbers[0];
}

console.log(fibanacci(8));
console.log(fibanacci(0));
console.log(fibanacci(1));