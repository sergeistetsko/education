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

const price = 100
const discount = 12
const total = price - (price * discount / 100)

if (total >= 90) {
    console.log('Не берём')
} else if (total < 80) {
    console.log('Дайте два!!!')
} else {
    console.log('Берём один')
}

// console.log(total)
//
// console.log(total > 90)
// console.log(total === 100)
// console.log(total < 100)

// В данном уроке было просто пояснение про var и строгое сравнение