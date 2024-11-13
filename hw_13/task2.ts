// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

function validatePassword(password: string): boolean {
  const uppercase = /(?=[A-Z]+)/.test(password);
  const lowercase = /(?=[a-z]+)/.test(password);
  const digit = /(?=[0-9]+)/.test(password);
  const minlength = password.length >= 8;
  const onlyspaces = Boolean(password.trim().length);

  return uppercase && lowercase && digit && minlength && onlyspaces;
}

console.log(validatePassword('Az1Az1Az')); // true
console.log(validatePassword('Az1   Az')); // true
console.log(validatePassword('   Az1Az')); // true
console.log(validatePassword('Az1Az1A')); // false
console.log(validatePassword('        ')); // false
console.log(validatePassword('AzAzAzAz')); // false