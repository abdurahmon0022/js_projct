const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const fib = [1, 1, 2, 3, 5, 8, 13]
/*const people =[
    {name:'Abdurahmon', budget: 4200},
    {name:'Saboat', budget: 3500},
    {name:'Gaffor', budget: 1700}
]*/
/* Метод
cars.push('Рено')
cars.unshift('Волга')
const firstCar = cars.shift()
const lastCar = cars.pop()
console.log('Первая машина -',firstCar);
console.log('Последняя машина -',lastCar);
console.log(cars);*/

/*console.log(cars.reverse());
console.log(cars);

const index = cars.indexOf('БМВ');
cars[index] = 'Porcshe'
console.log(cars);*/

/*let findedPerson
for (const person of people) {
    if (person.budget===3500) {
        findedPerson=person
    }
}*/

//console.log(findedPerson);
/*
const index = people.findIndex(function(person){
    return person.budget===3500
})
const person = people.find(function(person){
    return person.budget===3500
})*/
//const person = people.find(person => person.budget === 3500)
//console.log(person);

//console.log(cars.includes('Мазда!'));
// map Преобразовывает данные/Создает новый измененный массив
/*const upperCaseCars = cars.map(car => {
    return car.toUpperCase()
})
*/
//const pow2 = num => num ** 2
/*const sqrt = num => Math.sqrt(num)
const pow2Fib = fib.map(pow2).map(Math.sqrt)
console.log(pow2Fib);*/
/*
const pow2Fib = fib.map(pow2)
const filteredNumbers = pow2Fib.filter(num => num >20)
console.log(filteredNumbers);
console.log(pow2Fib);*/



// Задача 1
/*
const text = 'Привет, мы изучаем JS'
const reversText = text.split('').reverse().join('')
console.log(reversText);*/

const people =[
    {name:'Abdurahmon', budget: 4200},
    {name:'Saboat', budget: 3500},
    {name:'Gaffor', budget: 1700}
]

const allBudget = people
    .felter(person => person
    .budget>2000).reduce((acc, person) => {
        acc+=person.budget  
        return acc
    }, 0)
console.log(allBudget);

//const displayItem = allItems.filter(item => item.name.indexOf('phone')!== -1)