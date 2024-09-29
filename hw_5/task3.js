'use strict';
// Создать программукоторая будет принимать на вход СЛОВО (создать переменную со словом)
//   и выводить в консоль количество гласных и согласных букв в этом слове. 
//   Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants

const word = 'JavaScript';

const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz';
let vowelsNumber = 0;
let consonantsNumber = 0;

for (const wordChar of word) {
  if (vowels.includes(wordChar.toLowerCase())) {
    vowelsNumber++;
  } else if (consonants.includes(wordChar.toLowerCase())) {
    consonantsNumber++;
  }
}

console.log(`word contains ${vowelsNumber} vowels and ${consonantsNumber} consonants`);

// Вариант 2

vowelsNumber = 0;
consonantsNumber = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i].search(/[aeiou]/i) !== -1) {
    vowelsNumber++;
  } else if (word[i].search(/[bcdfghjklmnpqrstvwxyz]/i) !== -1) {
    consonantsNumber++;
  }
}

console.log(`word contains ${vowelsNumber} vowels and ${consonantsNumber} consonants`);