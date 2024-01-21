let elementById = document.getElementById('elementById')
console.log(elementById)

let elementByClass = document.getElementsByClassName('elementByClass')
console.log(elementByClass)

let elementByTag = document.getElementsByTagName('div')
console.log(elementByTag)

let elementBySelector = document.querySelector('#elementById')
console.log(elementBySelector)

let elementBySelector2 = document.querySelector('.elementByClass')
console.log(elementBySelector2)

let elementBySelectorAll = document.querySelectorAll('*')
console.log(elementBySelectorAll)

let elementBySelectorDiv = document.querySelectorAll('div')
console.log(elementBySelectorDiv)

let elementBySelectorAll2 = document.querySelectorAll('#elementById, .elementByClass')
console.log(elementBySelectorAll2)