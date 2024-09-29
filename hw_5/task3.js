'use strict';
// Создать программукоторая будет принимать на вход СЛОВО (создать переменную со словом)
//   и выводить в консоль количество гласных и согласных букв в этом слове. 
//   Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants

const word = 'JavaScript';

const vowels = 'aeiou';
let vowelsNumber = 0;

for (const wordChar of word) {
  for (const vowel of vowels) {
    if (wordChar.toLowerCase() === vowel) {
      vowelsNumber++;
    }
  }
}

console.log(`word contains ${vowelsNumber} vowels and ${word.length - vowelsNumber} consonants`);

vowelsNumber = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i].search(/[aeiou]/i) !== -1) {
    vowelsNumber++;
  }
}

console.log(`word contains ${vowelsNumber} vowels and ${word.length - vowelsNumber} consonants`);