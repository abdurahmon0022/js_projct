//<link rel="stylesheet" href="styly.css">
const heading = document.getElementById("hello")
//const heading2 = document.getElementsByTagName('h2')[0]
//const heading2 = document.getElementsByClassName('h2-class')[0]
//const heading2 = document.querySelector('h2')
//const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('#sub-hello')

//console.dir(heading2);
//const heading3 = heading2.nextElementSibling
const h2List =document.querySelectorAll('h2')
//console.log(h2List);
const heading3 = h2List[h2List.length-1]
//console.log(heading3);


setTimeout(() => {
    addSylesTO(heading, 'JS')
}, 1500)

setTimeout(() => {
    addSylesTO(heading2, 'Практикуйся', 'blue')
}, 3000)

const link = heading3.children[0]
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('click on link', event.target.getAttribute('href'));
    const url = event.target.getAttribute('href')
    window.location = url
})

setTimeout(() => {
    addSylesTO(link, 'И все получится', 'green', '2rem')
}, 4500)

function addSylesTO(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'pink'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

// https://developer.mozilla.org/ru/docs/Web/Events
heading.onclick =() =>{
    if (heading.style.color==='red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = 'pink'
    }
}

heading2.addEventListener('click', () => {
    if (heading2.style.color==='blue') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
        
    } else {
        heading2.style.color = 'blue'
        heading2.style.backgroundColor = 'pink'

    }
})