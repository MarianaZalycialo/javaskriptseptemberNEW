// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
    function User (id, name, surname , email, phone){
        this.id = id ;
        this.name = name;
        this.surname = surname;
        this.email =  email;
        this.phone =  phone;
    }
    let users = [
        new User(1,"Mariana","Zalyciailo","zalyciailo@gmail.com","0972134115"),
        new User(2,"Mari","Zoch","masia@gmail.com","0972167815"),
        new User(3,"Tom","Demydov","slavaukraini@gmail.com","0972134115"),
        new User(4,"Dima","Horak","horak@gmail.com","0972135665"),
        new User(5,"Vlad","Titan","titanik@gmail.com","0979994115"),
        new User(6,"Misha","Oliinyk","misha@gmail.com","0972555115"),
        new User(7,"Yura","Zalyciailov","yurii@gmail.com","0972133315"),
        new User(8,"Anna","Simon","anna@gmail.com","0972188815"),
        new User(9,"Bodia","Hnydyk","bohdan@gmail.com","0972137665"),
        new User(10,"Vasia","Vidov","zvid333@gmail.com","0977884115"),
    ]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let usersFiltered = users.filter(user=>user.id%2===0);
console.log(usersFiltered);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let userSorted = users.sort(function(a, b){return a.id - b.id});
console.log(userSorted);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client{
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email =  email;
        this.phone =  phone;
        this.order = order;
    }
}
let clients = [
    new Client(1,"Mariana","Zalyciailo","zalyciailo@gmail.com","0972134115",[5,6,4,9,8]),
    new Client(2,"Mari","Zoch","masia@gmail.com","0972167815",[1,8,15,3]),
    new Client(3,"Tom","Demydov","slavaukraini@gmail.com","0972134115",[2,14,]),
    new Client(4,"Dima","Horak","horak@gmail.com","0972135665",[24,32,17,]),
    new Client(5,"Vlad","Titan","titanik@gmail.com","0979994115",[10]),
    new Client(6,"Misha","Oliinyk","misha@gmail.com","0972555115",[]),
    new Client(7,"Yura","Zalyciailov","yurii@gmail.com","0972133315",[0,18,26]),
    new Client(8,"Anna","Simon","anna@gmail.com","0972188815",[71,15,18,9,6,7]),
    new Client(9,"Bodia","Hnydyk","bohdan@gmail.com","0972137665",[13,14,19,5,3,4,8]),
    new Client(10,"Vasia","Vidov","zvid333@gmail.com","0977884115",[45,23]),
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientSorted = clients.sort(function(a, b){return a.order.length - b.order.length });
console.log(clientSorted);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, creater, year , maxSpeed, engine){
    this.model = model ;
    this.creater = creater;
    this.year = year;
    this.maxSpeed =  maxSpeed;
    this.engine =  engine;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function (){
        console.log(`Модель - ${this.model}`);
        console.log(`виробник - ${this.creater}`);
        console.log(`рік випуску - ${this.year}`);
        console.log(`максимальна швидкість - ${this.maxSpeed}`);
        console.log(`об'єм двигуна - ${this.engine}`);
    }
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = newSpeed;
    }
    this.changeYear = function (newValue){
        this.year = newValue;
    }
    this.addDriver= function (driver){
        this.driver = driver ;

    }
}

//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(model, creater, year , maxSpeed, engine) {
     this.model = model ;
     this.creater = creater;
     this.year = year;
     this.maxSpeed =  maxSpeed;
     this.engine =  engine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info() {
        console.log(`Модель - ${this.model}`);
        console.log(`виробник - ${this.creater}`);
        console.log(`рік випуску - ${this.year}`);
        console.log(`максимальна швидкість - ${this.maxSpeed}`);
        console.log(`об'єм двигуна - ${this.engine}`);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }
    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(driver) {
        this.driver = driver ;
    }
}

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку