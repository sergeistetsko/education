// example1
let message ='Привет, мир!'
console.log(message)

// example2
let name = 'Николай'
console.log('Привет, ' + name)
if (name.length > 6) {
    console.log('Ну и длиннющее же у вас имя!')
}

name = 'Ник'
console.log('Привет, ' + name)
if (name.length > 6) {
    console.log('Ну и длиннющее же у вас имя!')
} else {
    console.log('Имя у вас не из длинных.')
}
// example3
let lemonChicken = false
let beefWithBlackBean = true
let sweetAndSourPork = true

if (lemonChicken) {
    console.log('Отлично! Я буду курицу с лимоном!')
} else if (beefWithBlackBean) {
    console.log('Заказываю говядину.')
}  else if (sweetAndSourPork) {
    console.log('Ладно, закажу свинину.')
} else {
    console.log('Что ж, остаётся рис с яйцом.')    
}

// exercise1
name = 'Сергей'

if (name === 'Сергей') {
    console.log('Привет мне!')
} else if (name === 'Александр') {
    console.log('Привет папа!')
} else if (name === 'Света') {
    console.log('Привет мама!')
} else {
    console.log('Привет, незнакомец!')
}

// example1
let sheepCounted = 0
while (sheepCounted < 10) {
    console.log('Посчитано овец: ' + sheepCounted + '!')
    sheepCounted++
}
console.log('Хррррррр-пссссс')

// example2
for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
    console.log('Посчитано овец: ' + sheepCounted + '!')
}
console.log('Хррррррр-пссссс')

// example3
let timesToSayHello = 3
for (let i = 0; i < timesToSayHello; i++) {
    console.log('Привет')
}
// example4
animals = ['лев', 'фламинго', 'белый медведь', 'удав']
for (let i = 0; i < animals.length; i++) {
    console.log('В этом зоопарке есть ' + animals[i] + '.')
}
// example5
name = 'Ник'
for (let i = 0; i < name.length; i++) {
    console.log('В моём имени есть буква ' + name[i] + '.')
}
// example6
for (let x = 2; x < 10000; x = x * 2) {
    console.log(x)    
}

// exercise2
for (let x = 3; x < 10000; x = x * 3) {
    console.log(x)
}

x = 3
while (x < 10000) {
    console.log(x)
    x = x * 3
}

// exercise3.1
animals = ['Кот', 'Рыба', 'Лемур', 'Комодский варан']
for (let i = 0; i < animals.length; i++) {
    let animal = animals[i]
    console.log(animal + ' - прекрасное животное')
}

// exercise3.2
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';
while (randomString.length < 6) {
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    let randomLetter = alphabet[randomIndex];
    randomString = randomString + randomLetter;
}
console.log(randomString);

// exercise3.3
let input = 'javascript is awesome'
let output = ''

for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a') {
        output += '4'
    } else if (input[i] === 'e') {
        output += '3'
    } else if (input[i] === 'i') {
        output += '1'
    } else if (input[i] === 'o') {
        output += '0'
    } else {
        output += input[i]
    }
}
console.log(output)
