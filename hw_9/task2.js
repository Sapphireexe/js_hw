'use strict';
const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];

// 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
//     Объект должен иметь поля name (string) и age (number)

function addCharacter(character){
    if (!('name' in character)) throw new Error (`Object ${JSON.stringify(character)} must have key 'name'`);
    if (!('age' in character)) throw new Error (`Object ${JSON.stringify(character)} must have key 'age'`);
    const {name, age} = character;
    if (typeof name !== 'string') throw new Error (`Value of name ${JSON.stringify(name)} must be string`);
    if (typeof age !== 'number') throw new Error (`Value of age ${JSON.stringify(age)} must be number`);

    characters.push({name, age});
    console.log(`Successfully added ${JSON.stringify({name, age})}`);
    console.log(`Array is ${JSON.stringify(characters)}`);
}

addCharacter({ 'name': 'John', 'age': 25 });

// 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }

function getCharacter(name){
    if (typeof name !== 'string') throw new Error (`Input ${name} must be 'string'`);

    const character = characters.find(character => character.name === name);
    if(!character) throw new Error('Character not found');
    return character;
}

console.log(getCharacter('Fred'));

// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]

function getCharactersByAge(minAge) {
    if (typeof minAge !== 'number') throw new Error (`Input ${minAge} must be 'number'`);

    const minAgeValidCharacters = characters.filter(character => character.age >= minAge);
    return minAgeValidCharacters;
}

console.log(getCharactersByAge(40));

// 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)

function updateCharacter(name, newCharacter) {
    if (typeof newCharacter !== 'object') throw new Error (`${JSON.stringify(newCharacter)} must be object`);
    if (!('name' in newCharacter || 'age' in newCharacter)) throw new Error (`${JSON.stringify(newCharacter)} must contain 'name' key or 'age' key`);
    if ('name' in newCharacter && typeof newCharacter.name !== 'string') throw new Error (`Name ${newCharacter.name} must be string`);
    if ('age' in newCharacter && typeof newCharacter.age !== 'number') throw new Error (`Age ${newCharacter.age} must be number`);

    const character = getCharacter(name);
    if (!character) throw new Error (`Can't find character with name ${name}`);

    // const keysOfNewObject = Object.keys(newCharacter);
    // for (const key of keysOfNewObject) {
    //     character[key] = newCharacter[key];
    // }
    const {name: newName, age: newAge} = newCharacter;
    character.name = newName ?? character.name;
    character.age = newAge ?? character.age;
    console.log(`Successfully changed object to ${JSON.stringify(character)}`);
}

updateCharacter('Fred', {name: 'Freddie', age: 35});

// 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)

function removeCharacter(name) {
    if (typeof name !== 'string') throw new Error (`Input ${name} must be 'string'`);

    const indexOfCharacter = characters.findIndex(character => character.name === name);
    if (indexOfCharacter === -1) throw new Error (`Can't find character with name ${name}`);

    const characterToRemove = structuredClone(characters[indexOfCharacter]);
    characters.splice(indexOfCharacter, 1);
    console.log(`Successfully removed object ${JSON.stringify(characterToRemove)}`);
}

removeCharacter('John');