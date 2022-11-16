// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a,b) {
//     return a * b;
// }
// console.log(square(5,8));
// let result = square(5,8);
// console.log(result);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function round(d) {
//     return d / 2;
// }
// console.log(round(9));
// let r = round(8);
// console.log(round);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder(h,r) {
// return h * r;
// }
// console.log(cylinder(5,8));
// - створити функцію яка приймає масив та виводить кожен його елемент
// function array(arr){
//     for (let i = 0; i < arr.length; i++){
//         console.log(arr[i])
//     }
//
// }
// array([2,6,9,-1])
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function func1(name){
//     document.write(`<p>hay My name is ${name}</p>`)
// };
// func1('Mariana')
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function func2(name){
//     document.write(
//         `<ul>
//             <li>${name}</li>
//             <li>${name}</li>
//             <li>${name}</li>
//         </ul>`
//     )
// };
// func2('Mariana')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function func3(name, number){
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${name}</li>`)
//     }
//     document.write(`</ul>`)
// };
// func3('Mariana',20)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function func3(...arr) {
//     document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//     }
//     document.write(`</ul>`);
// };
// func3(1,2,'apple',false)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function user(...arr) {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>${arr[i].name} -- ${arr[i].age}</div>`);
    }
};
user({
    name: 'Mika',
    age: 32},
    {
        name: 'Toni',
        age: 55
    });
// - створити функцію яка повертає найменьше число з масиву
// let arr = [2,5,4,-3];
// function minCount(arr) {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++)
//     {
//         if(min > arr[i]) {
//             min = arr[i];
//         }
//     }
//     document.write(min);
// };
//
// minCount(arr);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arr=[3,9,6,4];
    function suma(arr){
     let one = 0;
        for (let i = 0; i < arr.length; i++){
            one = one+arr[i]
        }
        document.write(one);

    }
    suma(arr);