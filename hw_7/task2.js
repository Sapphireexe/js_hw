'use strict';
// 1. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

function checkPalindrome(string) {
    if (typeof string !== 'string' || string.search(/[^A-Z0-9]/i) !== -1) {
        throw new Error ('Input is not string or contain special chars');
    }
    const charsArray = [...string];
    const halfLength = Math.floor(charsArray.length / 2);
    let isPalindrome = true;
    
    for (let i = 0; i < halfLength; i++) {
        if (charsArray.at(i).toLowerCase() !== charsArray.at(-i - 1).toLowerCase()) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome ? `Word ${string} is palindrome` : `Word ${string} is not palindrome`;
}

console.log(checkPalindrome('level'));
console.log(checkPalindrome('Hannah'));
console.log(checkPalindrome('91019'));
console.log(checkPalindrome('Radar'));
console.log(checkPalindrome('Fish'));
console.log(checkPalindrome('Peace'));

// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
//     и возвращает слово с наибольшим количеством букв. 
//     Если таких слов несколько - возвращает их все.

function findLongestWord(word) {
    if (typeof word !== 'string') {
        throw new Error('Only string data acceptable');
    }
    if (word.match(/[^A-Z ']/i)) {
        throw new Error('Input string contains non-acceptable symbols');
    }
    if (!word.match(/[A-Z]/i)) {
        throw new Error(`Input string doesn't contain words`);
    }
    
    const splittedArrayOfWords = word.split(' ');

    const longestWordsArray = splittedArrayOfWords.reduce((result, word) => {
        const resultLength = result[0].replaceAll('\'', '').length;
        const wordLength = word.replaceAll('\'', '').length;

        if (resultLength < wordLength) {
            result = [word];
        } else if (resultLength === wordLength) {
            result.push(word);
        }

        return result;
    }, ['']);

    return(longestWordsArray.join(' '));
}

console.log(findLongestWord('Word Words Letter Letter Hannah Letters Letters Picture Pictures'));
console.log(findLongestWord('Pictures Word Words Letter Pictures Letter Hannah Letters Letters Picture'));
console.log(findLongestWord('Word Words Letter Letter Letters Hannah Letters Picture'));
console.log(findLongestWord(`You Can't Judge a Book By Its Cover`));
console.log(findLongestWord(`There wasn't a store near her`));