'use strict';
// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

function delayTwoSeconds(callbackFn) {
    setTimeout(callbackFn, 2000);
}

delayTwoSeconds(sayHi => console.log('Hi'));

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль

const promise1 = new Promise ((resolve, reject) => {
    resolve (1);
});

const result1 = promise1.then((result) => console.log(result));

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его резолва в консоль

const promise2 = new Promise ((resolve, reject) => {
    reject ('Promise failed');
});

const result2 = promise2
.then((result) => console.log(result))
.catch((error) => console.log(error));

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

function promiseNumber(number) {
    return new Promise ((resolve, reject) => {
        resolve (number);
    });
}

promiseNumber(5)
.then((result) => console.log(result));

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((results) => {
    console.log(results[0]);
    return results;
})
.then((results) => {
    console.log(results[1]);
    return results;
})
.then((results) => {
    console.log(results[2]);
})

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((results) => {
    console.log(`Status: ${results[0].status}, result: ${results[0].value}`);
    return results;
})
.then((results) => {
    console.log(`Status: ${results[1].status}, result: ${results[1].value}`);
    return results;
})
.then((results) => {
    console.log(`Status: ${results[2].status}, result: ${results[2].value}`);
})

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function logPromise(promiseArray = []) {
    try {
        const result = await Promise.all(promiseArray);
        result.forEach(promiseResult => console.log(promiseResult));
    } catch (error) {
        console.log(error);
    }
}

logPromise([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);

async function logPromise2(promiseArray = []) {
    try {
        const result = await Promise.allSettled(promiseArray);
        result.forEach(promiseResult => console.log(`Status: ${promiseResult.status}, result: ${promiseResult.value}`));
    } catch (error) {
        console.log(error);
    }
}

logPromise2([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);