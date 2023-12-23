let myTopThreeDinosaurs = ['Тираннозавр', 'Велоцираптор', 'Стегозавр']

//example1
let dinosaurs = [
    'Тираннозавр',
    'Велоцираптор',
    'Стегозавр',
    'Трицератопс',
    'Брахиозавр',
    'Птеранодон',
    'Апатозавр',
    'Диплодок',
    'Компсогнат'
]

//example2
console.log(dinosaurs[0])
console.log(dinosaurs[3])
dinosaurs[0] = 'Тираннозавр рекс'
console.log(dinosaurs)

dinosaurs = []
dinosaurs[0] = 'Тираннозавр'
dinosaurs[1] = 'Велоцираптор'
dinosaurs[2] = 'Стегозавр'
dinosaurs[3] = 'Трицератопс'
dinosaurs[4] = 'Брахиозавр'
dinosaurs[5] = 'Птеранодон'
dinosaurs[6] = 'Апатозавр'
dinosaurs[7] = 'Диплодок'
dinosaurs[8] = 'Компсогнат'
dinosaurs[10] = 'Компсогнат'
console.log(dinosaurs)

//example3
let dinosaursAndNumbers = [3, 'динозавры', ['трицератопс', 'стегозавр', 3627.5], 10]
console.log(dinosaursAndNumbers[2])
console.log(dinosaursAndNumbers[2][0])

//example4
let maniacs = ['Якко', 'Вакко', 'Дот']
console.log(maniacs[0])
console.log(maniacs[1])
console.log(maniacs[2])
console.log(maniacs.length)
console.log(maniacs[maniacs.length - 1])

//example5
let animals = []
animals.push('Кот')
animals.push('Пёс')
animals.push('Лама')
console.log(animals)
console.log(animals.length)
console.log(animals[0])
animals.unshift('Мартышка')
animals.unshift('Белый медведь')
console.log(animals[0])
console.log(animals)
console.log(animals.length)
console.log(animals[2])

let lastAnimal = animals.pop()
console.log(lastAnimal)
console.log(animals)
animals.pop()
console.log(animals)
animals.unshift(lastAnimal)
console.log(animals)

let firstAnimal = animals.shift()
console.log(firstAnimal)
console.log(animals)

//example6
let furryAnimals = ['Альпка', 'Кольцевой лемур', 'Йети']
let scalyAnimals = ['Удав', 'Годзилла']
let featheredAnimals = ['Ара', 'Додо'] 
let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals)
console.log(furryAndScalyAnimals)

//example7
let colors = ['красный', 'зелёный', 'синий']
console.log(colors.indexOf('синий'))
console.log(colors.indexOf('зелёный'))
console.log(colors.indexOf('фиолетовый'))

let insects = ['Пчела', 'Муравей', 'Пчела', 'Пчела', 'Муравей']
console.log(insects.indexOf('Пчела'))

//example8
let boringAnimals = ['Мартышка', 'Кот', 'Рыба', 'Ящерица']
console.log(boringAnimals.join())
console.log(boringAnimals.join(' - '))
console.log(boringAnimals.join('*'))
console.log(boringAnimals.join(' и '))

//example9
let myNames = ['Николас', 'Эндрю', 'Максвелл', 'Морган']
console.log(myNames.join(' '))

//example10
let ages = [11, 14, 79]
console.log(ages.join(' '))

//example11
let landmarks = []
console.log(landmarks.push('Мой дом'))
console.log(landmarks.push('Дорожка к дому'))
console.log(landmarks.push('Мигающий фонарь'))
console.log(landmarks.push('Протекающий гидрант'))
console.log(landmarks.push('Пожарная станция'))
console.log(landmarks.push('Приют для кошек'))
console.log(landmarks.push('Дом подруги'))
console.log(landmarks)

console.log(landmarks.pop())
console.log(landmarks)
console.log(landmarks.pop())
console.log(landmarks)
console.log(landmarks.pop())
console.log(landmarks)
console.log(landmarks.pop())
console.log(landmarks)
console.log(landmarks.pop())
console.log(landmarks)
console.log(landmarks.pop())
console.log(landmarks)

//example12
console.log(Math.random())
console.log(Math.random())

console.log(Math.random()*10)

console.log(Math.floor(Math.random()*10))
console.log(Math.floor(Math.random()*10))

//example13
let randomWords = ['Взрыв', 'Пещера', 'Принцесса', 'Карандаш']
let randomIndex = Math.floor(Math.random()*4)
console.log(randomWords[randomIndex])
console.log(randomWords[randomIndex])

//example14
let phrases = [
    'Звучит неплохо',
    'Да, это определённо надо сделать',
    'Не думаю, что это хорошая идея',
    'Может, не сегодня?',
    'Компьютер говорит нет'
]
// Мне выпить ещё молочного коктейля?
console.log(phrases[Math.floor(Math.random()*5)])
console.log(phrases[Math.floor(Math.random()*5)])
console.log(phrases[Math.floor(Math.random()*5)])
console.log(phrases[Math.floor(Math.random()*5)])

//example15
let randomBodyParts = ['глаз', 'нос', 'череп']
let randomAdjectives = ['вонючая', 'унылая', 'дурацкая']
let randomWords0 = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса']

let randomBodyPart = randomBodyParts[Math.floor(Math.random()*randomBodyParts.length)]
let randomAdjective = randomAdjectives[Math.floor(Math.random()*randomAdjectives.length)]
let randomWord = randomWords0[Math.floor(Math.random()*randomWords0.length)]

let randomInsult = 'У тебя ' + randomBodyPart + ' словно ' + randomAdjective + ' ' + randomWord + '!!!'
console.log(randomInsult)

//exercise16
function generateTease1() {
    let subjects = ['Ты', 'Твой друг', 'Твой сосед', 'Твой брат'];
    let verbs = ['похож', 'звучит', 'выглядит', 'пахнет'];
    let adjectives = ['как старый сыр', 'как носок', 'как мусор', 'как перегоревшая лампочка'];

    let randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];

    return randomSubject + ' ' + randomVerb + ' ' + randomAdjective + '!';
}
console.log(generateTease1());

function generateTease2() {
    let subjects = ['Ты', 'Твой друг', 'Твой сосед', 'Твой брат'];
    let verbs = ['похож', 'звучит', 'выглядит', 'пахнет'];
    let adjectives = ['как старый сыр', 'как носок', 'как мусор', 'как перегоревшая лампочка'];

    let randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];

    return [randomSubject, randomVerb, randomAdjective].join(' ') + '!';
}
console.log(generateTease2());

let arr = [3, 2, 1]
console.log(arr.join(' больше, чем '))