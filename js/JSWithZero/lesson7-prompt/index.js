/*
function greeting() {
    alert('Привет, мир!!!')
}
setTimeout(greeting, 5000)*/

// const friendName = 'Alex'
// friendName = 'Bob'

// let friendAge  = 28

// friendAge = 29

// alert('Привет, ' + friendName)

/*const price = 100
const discount = 12
const total = price - (price * discount / 100)

if (total >= 90) {
    console.log('Не берём')
} else if (total < 80) {
    console.log('Дайте два!!!')
} else {
    console.log('Берём один')
}*/

// console.log(total)
//
// console.log(total > 90)
// console.log(total === 100)
// console.log(total < 100)

// В данном уроке было просто пояснение про var и строгое сравнение

let sum = +prompt('Укажите стартовую сумму', '1000')
const percent = 15
const result = 2000

let count = 0

const depositTerm = +prompt('Укажите срок депозита', '10')

while (count < depositTerm) {
    sum = sum + sum * (percent / 100)
    console.log(sum)
    count++
}

console.log(sum, count)

