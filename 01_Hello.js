
// Объекты
const person = {
    firstName: 'Abdurahmon',
    lastNmae: 'Mamadjonov',
    year: 2000,
    languages: ['Ru', 'En', 'Tj'],
    hasWife: false,
    greet: function (){
        console.log('greet from person')
    }
}
console.log(person.firstName)
console.log(person["lastNmae"])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrmmer = true
console.log(person)
person.greet()