'use strict'
/*
Task 2*
Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются
*/

function summOfNumber (n) {
    if (typeof n !== 'number' || isNaN(n) || n < 1 || n > 9) {
        throw new Error ('Invalid input data');
    }
    const nAsString = String(n);
    return n + Number(nAsString + nAsString) + Number(nAsString + nAsString + nAsString);
}

console.log(summOfNumber (3));