// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let fruits = ['apple', 'plum', 'grape', 'tangerine', 'cherry', 'watermelon', 'melon', 'orange', 'lemon', 'grapefruit'];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);
// console.log(fruits[5]);
// console.log(fruits[6]);
// console.log(fruits[7]);
// console.log(fruits[8]);
// console.log(fruits[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1 = {
//     title:'Pygmalion',
//     pageCount: 35,
//     genre:'comedy'
// };
// let book2 = {
//     title:'Until the End of Time',
//     pageCount: 58,
//     genre:'novel'
// };
// let book3 = {
//     title:'Doctor Sleep',
//     pageCount: 88,
//     genre:'horror'
// };
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
// let book1 = {
//     title:'Pygmalion',
//     pageCount: 35,
//     genre:'comedy',
//     authors: [{
//     name:'Dima',
//     age:30
//     }
//     ]
// };
// let book2 = {
//     title:'Until the End of Time',
//     pageCount: 58,
//     genre:'novel',
//     authors: [{
//         name:'Artem',
//         age:50
//     }
//     ]
// };
// let book3 = {
//     title:'Doctor Sleep',
//     pageCount: 88,
//     genre:'horror',
//     authors: [{
//         name:'Mari',
//         age:48
//     }
//     ]
// };
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [
    {
        name: 'Solomia',
        username: 'Mika',
        password: 65544
    },
    {
        name: 'Anton',
        username: 'Toni',
        password: 67777
    },
    {
        name: 'Mariana',
        username: 'Masia',
        password: 11111
    },
    {
        name: 'Solomia',
        username: 'Mika',
        password: 65544
    },
    {
        name: 'Dima',
        username: 'Don',
        password: 65654
    },
    {
        name: 'Anna',
        username: 'Ani',
        password: 79899
    },
    {
        name: 'Ruslan',
        username: 'Rulia',
        password: 63231
    },
    {
        name: 'Roman',
        username: 'Roma',
        password: 22222
    },
    {
        name: 'Olia',
        username: 'olha',
        password: 88334
    },
    {
        name: 'Olena',
        username: 'Lena',
        password: 99999
    }
]
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);



let user = {
    name:'Mariana',
    age:28
}
console.log(user.name);
let user1 = {
    name: 'Mariana',
    age:28,

}
console.log(user.name);
let user2 = {
    name: 'Mariana',
    age:28
}
console.log(user.name);

let users = [user, user1, user2];
for(let user of users){
    console.log(user.name);
}
