// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    //Вивести кожну змінну за допомогою: console.log
let greeting = 'hello';
console.log(greeting);
let name = 'owu';
console.log(name);
let gmail = 'com';
console.log(gmail);
let ukrain = 'ua';
console.log(ukrain);
let number1 = 1;
console.log(number1);
let number2 = 10;
console.log(number2);
let number3 = -999;
console.log(number3);
let number4 = 123;
console.log(number4);
let number5 =3.14 ;
console.log(number5);
let number6 = 2.7;
console.log(number6);
let number7 = 16;
console.log(number7);
let boolean1 = true;
console.log(boolean1);
let boolean2 = false;
console.log(boolean2);


// // - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = "Mariana";
console.log(firstName);
let middleName = "Bohdanivna";
console.log(middleName);
let lastName = "Zalyciailo";
console.log(lastName);
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);
let person1=`${firstName} ${middleName} ${lastName}`;
console.log(person1);


//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let names = prompt("firstName");
console.log(names);
let lasts = prompt("lastName");
console.log(lasts);
let father = prompt("middleName");
console.log(father);
let years = prompt('age');
console.log(years);


