'use strict';
// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 200. Если статус не 200 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

async function createTodo(body) {
   try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
         body: JSON.stringify(body),
         method: 'POST',
         headers: {'Content-type': 'application/json; charset=UTF-8'},
      });
      if (!response.ok) {
         throw new Error(`Response status is ${response.status}`);
      }
      const responseBody = await response.json();
      
      for (const key in body) {
         if (!(key in responseBody)) {
            throw new Error(`Response body does not contain key ${key} with value ${body[key]}`);
         }
         if (body[key] !== responseBody[key]) {
            throw new Error(`Response body has different value of ${key}: ${responseBody[key]}, object has ${key}: ${body[key]}`);
         }
      }
      return responseBody;
   } catch (error) {
      console.log(error);
   } finally {
      console.log('Function completed');
   }
}

const todo = {
   title: 'sapp',
   body: 'hire',
   userId: 123,
}

createTodo(todo).then(result => console.log(result));