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