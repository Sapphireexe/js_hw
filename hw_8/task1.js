'use strict';
// Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:

const numbersArray = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

//   1. forEach - выведите в консоль все числа, делящиеся без остатка на 3 // 30

numbersArray.forEach(number => {
    if (!(number % 3)) {
        console.log(number);
    }
})

//   2. map - создайте новый массив, в котором из каждого элемента изначального массива вычли длину изначального массива 
//      // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]

const extractLengthFromElements = numbersArray.map((number, index, array) => number - array.length);

console.log(extractLengthFromElements);

//   3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
//      // [8, 30, 85, 95, 94]

const getIncreasedElements = numbersArray.filter((element, index, array) => element > array[index - 1]);

console.log(getIncreasedElements);

//   4. find - найдите элемент, равный своему индексу //2

const getElementEqualsIndex = numbersArray.find((element, index) => element === index);

console.log(getElementEqualsIndex);

//   5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
//      // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]

const sortByIncrease = [...numbersArray].sort((a, b) => a - b);

console.log(sortByIncrease);
console.log(numbersArray);

//   6. reduce - получите сумму всех чисел массива //466

const sumOfArrayElements = numbersArray.reduce((result, element) => result + element, 0);

console.log(sumOfArrayElements);

//   7. some - проверьте, есть ли в массиве элементы больше 90 //true

const containsElementsMoreThan90 = numbersArray.some(number => number > 90);

console.log(containsElementsMoreThan90);

//   8. every - проверьте, что все элементы массива двухзначные //false

const contains2DigitNumbers = numbersArray.every(number => number >= 10 && number < 100);

console.log(contains2DigitNumbers);