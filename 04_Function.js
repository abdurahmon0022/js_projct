// 1.Фукции
// Function Declaration
/*
function great(name){
    console.log('Привет -',name );
}
// Function Expression
const great2 = function great2(name){
    console.log('Привет 2',name );
}
*/
//great ('Лена')
//great2 ('Лена')

//console.log(typeof great);
//console.dir(great)

// 2.Анонимные Функции
/*
let counter = 0
let interval = setInterval(function(){ //setTimeout
    if (counter === 5) {
        clearInterval(interval) //clearTimeout
    } else{
        console.log(++counter);
    }
    
}, setTimeout = 1000)*/

// 3.Стрелочные Функции
/*
function great(name){
    console.log('Привет -',name );
}

const arrow = (name, age) => {
    console.log('Привет -',name, age);
}

const arrow2 = name => console.log('Привет -',name );

arrow2('Абдурахмон')

const pow2 = num =>  num **2

console.log(pow2(5));*/
// 4.Параметры по умолчанию
/*
const sum = (a=40, b=a*2) => a + b
console.log(sum(41, 4));
console.log(sum());

function sumAll (...all){
    let result = 0
    for(let num of all){
        result += num
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5)
console.log(res);
*/
// 5.Замыкание
function createMembers(name) {
    return function(lastName){
        console.log(name + lastName);
    }
}
const logWithLastName = createMembers('Abdurahmon')
console.log(logWithLastName('Minin'));
console.log(logWithLastName('Maxim'));