'use strict';
// Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
//   и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
//   Решите эту задачу, используя эффективные методы массива.

// Пример: const arr = [5,2,7,3,8,1,6] //4

const arr = [5,2,7,3,8,1,6];

function findMissingNumber(arr = []) {
    if (arr.some(number => typeof number !== 'number')) {
        throw new Error ('Array must contain only digits');
    }
    const duplicate = arr.find((number, index, array) => array.indexOf(number) !== array.lastIndexOf(number));
    if (duplicate) {
        throw new Error (`Array contains duplicates: ${duplicate}`);
    }

    const sortedArrayOfNumbers = [...arr].sort((a, b) => a - b);

    // const missingNumber = sortedArrayOfNumbers.reduce((result, number, index) => {
    //     if (number !== index + 1 && result === 0) {
    //         result = index + 1;
    //     }
    //     return result;
    // }, 0);

    const missingNumber = sortedArrayOfNumbers.find((number, index) => number !== index + 1) - 1;

    if (!missingNumber) {
        return 'No missing number found';
    }

    return missingNumber;
}

console.log(findMissingNumber(arr));