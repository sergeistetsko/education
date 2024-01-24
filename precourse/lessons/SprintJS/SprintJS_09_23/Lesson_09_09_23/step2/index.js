// JS------------------------------------------------------------------------

//getElementById
let elemById = document.getElementById('elementById')
console.log(elemById)

//getElementsByClassName
let elemByClass = document.getElementsByClassName('elementByClass')
console.log(elemByClass)

//getElementsByTagName
let elemByTag = document.getElementsByTagName('div')
console.log(elemByTag)

//querySelector#
let elemBySelectorId = document.querySelector('#elementById')
console.log(elemBySelectorId)

//querySelector.
let elemBySelectorClass = document.querySelector('.elementByClass')
console.log(elemBySelectorClass)

//querySelectorAll*
let elemBySelectorAllStar = document.querySelectorAll('*')
console.log(elemBySelectorAllStar)

//querySelectorAll*
let elemBySelectorAll = document.querySelectorAll('#elementById,.elementByClass');
console.log(elemBySelectorAll);
