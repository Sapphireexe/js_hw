// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

// function getKeyByValue<T extends object, U>(object: T, value: U): keyof T | undefined {
//     for (const key in object) {
//         if (object[key] === value) {
//             return key;
//         }
//     }
//     return undefined;
// }

function getKeyByValue<T extends object, U extends T[keyof T]>(object: T, value: U): keyof T | undefined {
    return Object.keys(object).find(key => object[key as keyof T] === value) as keyof T;
}

const QA1 = {
    name: 'Junior',
    salary: 1500,
}

console.log(getKeyByValue(QA1, 1500))
console.log(getKeyByValue(QA1, 'Junior'))
console.log(getKeyByValue(QA1, 'name'))
console.log(getKeyByValue(QA1, 'salary'))
console.log(getKeyByValue(QA1, 1000))