'use strict';
// 1. У вас есть массив названий пицц вашего конкурента. Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
//   и выводить в консоль только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вывести в консоль null.
//   Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
//   Пиццы конкурента:
//   const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzas = ['Hawai','Chicken BBQ','4 Cheeses','Backon and Mushrooms','Peperoni'];
const myPizzas2 = ['Diablo', 'hawai', 'Peperoni', 'Caprichosa', '4 cheeses'];

function comparePizzas (myPizzas = [], competitorPizzas = []) {
  const myUniquePizzas = [];
  const stringOfCompetitorPizzas = competitorPizzas.toString().toLowerCase().replaceAll(' ', '');

  for (const myPizza of myPizzas) {
    if (!(stringOfCompetitorPizzas.includes(myPizza.toLowerCase().replaceAll(' ', '')))) {
      myUniquePizzas.push(myPizza);
    }
  }
  return myUniquePizzas.length ? myUniquePizzas : null;
}

console.log(comparePizzas(myPizzas, competitorPizzas));
console.log(comparePizzas(myPizzas2, competitorPizzas));