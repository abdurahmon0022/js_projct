//const name = "AB2"
//const age = 21

//function getAge() {
//    return age
//}

// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'A': "B" } лет.`
//const output = `
//<div>This is div</div>
// <p>This is p</p>
//`

//console.log(output)
/*
const name = 'Abdurahmon'
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(1))
console.log(name.indexOf('a'))
console.log(name.toLowerCase().startsWith('abd'))
console.log(name.startsWith('Abd'))
console.log(name.endsWith('on'))
console.log(name.repeat(3))
const string = '     password     '
console.log(string.trim())
console.log(string.trimLeft())
console.log(string.trimStart())
console.log(string.trimRight())
console.log(string.trimEnd())
*/

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`

}
const personName ='Абдурахмон'
const personAge = 21
const personName2 ='Максим'
const personAge2 = -21

const output = logPerson`Имя: ${personName}, Возраст:${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст:${personAge2}?`
console.log(output);
console.log(output2);