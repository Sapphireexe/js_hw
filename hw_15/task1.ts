// 1. Создайте дженерик функцию wrapInArray, которая принимает значение любого типа и возвращает его в виде массива этого типа.

function wrapInArray<T>(element: T): T[] {
  return [element];
}

const numberArray = wrapInArray(5); // [5]
const stringArray = wrapInArray('Hello'); // ['Hello']
console.log(numberArray);
console.log(stringArray);


// 2. Создайте дженерик функцию getLastElement, которая принимает массив элементов типа T, и возвращает последний элемент (типа T).

function getLastItem<T>(array: T[]):T {
  return array[array.length - 1];
}

console.log(getLastItem([1, 2, 3, 4])); // 4
console.log(getLastItem(['a', 'b', 'c'])); // 'c'


// 3. Создайте дженерик интерфейс IPair, который принимает два типа T и U и содержит поля first: T и second: U. 
//    Реализуйте функцию, принимающую IPair и возвращающую строку, описывающую пару.

interface IPair<T, U> {
  first: T;
  second: U;
}

function describePair<T, U>(object: IPair<T, U>): string {
  return `${object.first} and ${object.second}`;
}

console.log(describePair({ first: 'Alice', second: 30 })); // "Alice and 30"