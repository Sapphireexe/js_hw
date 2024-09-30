'use strict';
// 1. Цикл for..of в массиве
//   - Создайте массив [1,2,3,4,5,6,7,8,9,10]
//   - Создайте цикл for..of, бегущий по массиву, в котором будет реализована следующая логика:
//     если элемент четный - возведет его в квадрат
//     если элемент нечетный - возведет его в 3ю степень

const arrayOfTenNumbers = [1,2,3,4,5,6,7,8,9,10];

for (const number of arrayOfTenNumbers) {
  if (!(number % 2)) {
    console.log(number ** 2);
  } else if (number % 2) {
    console.log(number ** 3);
  }
}

// 2. Методы массивов
//   - Создайте массив [1,2,3,4,5]
//   - Добавьте в конец массива число 6 соответствующим методом
//   - Добавьте в начало массива число 0 соответствующим методом
//   - Удалите элемент с индексом 2 из массива соответствующим методом
//   - Удалите последний элемент из массива соответствующим методом
//   В результате вы должны получить [0, 1, 3, 4, 5]

const arrayOfFiveNumbers = [1,2,3,4,5];

arrayOfFiveNumbers.push(6);
arrayOfFiveNumbers.unshift(0);
arrayOfFiveNumbers.splice(2, 1);
arrayOfFiveNumbers.pop();

console.log(arrayOfFiveNumbers);

// 3. Деструктуризация массивов
//   - Создайте массив из 5 любых чисел (придумать числа самим)
//   - Через деструктуризацию получите в новые переменные первый, второй и остальные элементы массива
//   - Пример: [1,2,3,4,5] => first === 1; second === 2, rest === [3,4,5]

const arrayOfRandomNumbers = [1, 2, 5, 10, 16];

const [first, second, ...rest] = arrayOfRandomNumbers;

console.log(first, second, rest);

// 4. Конкатенация массивов
//   - Создайте массив с числами [1,2,3,4,5]
//   - Создайте еще 1 массив с числами [6, 7, 8, 9, 10]
//   - Создайте переменную mergedArray, который будет хранить значения из массивов 1 и 2
//   - Используйте спред оператор

const firstArray = [1,2,3,4,5];
const secondArray = [6,7,8,9,10];

const mergedArray = [...firstArray, ...secondArray];

console.log(mergedArray);