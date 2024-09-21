// Задание 2: Арифметические операторы

// Ввод чисел
let num1 = 15; // Первое число
let num2 = 3;  // Второе число

// 1. Сложение двух чисел
let sum = num1 + num2;
console.log("Сложение: " + num1 + " + " + num2 + " = " + sum);

// 2. Разность двух чисел
let difference = num1 - num2;
console.log("Разность: " + num1 + " - " + num2 + " = " + difference);

// 3. Произведение двух чисел
let product = num1 * num2;
console.log("Произведение: " + num1 + " * " + num2 + " = " + product);

// 4. Деление двух чисел
let division = num1 / num2;
console.log("Деление: " + num1 + " / " + num2 + " = " + division);

// 5. Остаток от деления двух чисел
let remainder = num1 % num2;
console.log("Остаток от деления: " + num1 + " % " + num2 + " = " + remainder);

// 6. Возведение числа в степень
let exponentiation = num1 ** num2;
console.log("Возведение в степень: " + num1 + " ^ " + num2 + " = " + exponentiation);

// Задание 4: Операторы проверки отношений

let x = 25; 
let y = 43;

if (x > y) {
  console.log(`${x} больше, чем ${y}`);
} else if (x < y) {
  console.log(`${x} меньше, чем ${y}`);
} else {
  console.log(`${x} равно ${y}`);
}

// Задание 6: Оператор in

let user = { name: 'John', age: 30
};

console.log('name' in user); // Результат: `true`. Оператор in проверяет наличие свойства с именем 'name' в объекте user. Поскольку объект user имеет ключ name со значением 'John', результат — true.
console.log('email' in user); //  Результат: `false`. Оператор in проверяет, есть ли в объекте user ключ с именем 'email'. В данном случае такого ключа нет, поэтому результат — false.


// Задание 8: Логические операторы

let isAdmin = true; 
let isLoggedIn = false;
let canViewPage = isAdmin && isLoggedIn;  // Результат: `false`. Оператор && (логическое И) возвращает true только если оба условия истинны. В данном случае isAdmin — true, а isLoggedIn — false. Поскольку одно из условий ложно, результат — false.

let hasPermission = isAdmin || isLoggedIn;  // Результат: `true`. Оператор || (логическое ИЛИ) возвращает true, если хотя бы одно из условий истинно. Поскольку isAdmin — true, результат — true, независимо от значения isLoggedIn.

let isGuest = !isLoggedIn;  // Результат: `true`. Оператор ! (логическое НЕ) меняет значение выражения. Поскольку isLoggedIn — false, выражение !isLoggedIn становится true.

console.log('canViewPage:', canViewPage);  
console.log('hasPermission:', hasPermission);  
console.log('isGuest:', isGuest);  

// Задание 9: Тернарный оператор

let isLoggedIn1 = true; 

let message = isLoggedIn1 ? "Добро пожаловать" : "Вход запрещен";
console.log(message);

// Задание 10: Оператор typeof и оператор delete

console.log(typeof 123);          // Тип: number
console.log(typeof 'Hello');      // Тип: string
console.log(typeof undefined);     // Тип: undefined

let car = { 
    make: 'Toyota',
    model: 'Corolla'
};

delete car.model;                // Удаляем свойство model
console.log(car);                 // Проверяем объект

// Задание 11: Практика с несколькими операторами

let num3 = 10; 
let num4 = 20;

// Выполнение нескольких арифметических операций
let sum1 = num3 + num4;          // Сложение
let difference1 = num4 - num3;   // Вычитание
let product1 = num3 * num4;      // Умножение
let quotient1 = num4 / num3;     // Деление

// Выполние сравнения
let isGreater = num4 > num3;    // Сравнение
let isEqual = num3 === num4;    // Проверка на равенство

// Использование логических операторов
let logicalAnd = isGreater && isEqual; // Логическое И
let logicalOr = isGreater || isEqual;   // Логическое ИЛИ

// Использование тернарного оператора для вывода результата
let result = isGreater ? "num4 больше num3" : "num4 не больше num3";

console.log(`Сумма: ${sum1}`);
console.log(`Разность: ${difference1}`);
console.log(`Произведение: ${product1}`);
console.log(`Частное: ${quotient1}`);
console.log(`isGreater: ${isGreater}`);
console.log(`isEqual: ${isEqual}`);
console.log(`Logical AND: ${logicalAnd}`);
console.log(`Logical OR: ${logicalOr}`);
console.log(result);