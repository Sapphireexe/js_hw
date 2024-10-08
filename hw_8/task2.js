'use strict';
//   Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по следующему критерию: количество гласных букв.
//     Массив должен быть отсортирован по возрастанию количества гласных букв в слове.

const words = [
    "umbrella",   
    "apple",      
    "ocean",      
    "independent",
    "education",  
    "elephant",   
    "island",     
    "universe",   
    "environment",
    "queue"       
  ];

function sortArrayByIncreasingVowels(array) {
    if (!Array.isArray(array)) {
        throw new Error (`Input is not array`);
    }
    array.forEach(element => {
        if (typeof element !== 'string') {
            throw new Error (`Array contains ivalid type of element: element ${element} type ${typeof element}`);
        }
    });

    return [...array].sort((a, b) => countVowels(a) - countVowels(b));
}

function countVowels(word) {
    const vowelsArray = ['a', 'e', 'i', 'o', 'u', 'y'];

    return [...word].filter(element => vowelsArray.includes(element)).length;
}

// function countVowels(word) {
//     return word.match(/[aeiouy]/ig).length;
// }

console.log(sortArrayByIncreasingVowels(words));