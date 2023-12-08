//example1
let cat = {
    legs: 3,
    name: 'Гармония',
    color: 'Черепаховый'
}

//example2
console.log(cat["name"])

//example3
console.log(cat.name)

//example4
console.log(Object.keys(cat))

//example5
let object = {}
object.legs = 3
object.name = 'Гармония'
object.color = 'Черепаховый'

console.log(object)

//example6
let dog = {}
dog.legs = 4
dog.name = 'Оладушек'
dog.isAwesome = true

console.log(dog.isBrown)

console.log(dog)

//example7
dinosaurs = [
    {name: 'Тиранозавр рекс', period: 'Верхнемеловой'},
    {name: 'Стегозавр', period: 'Верхнеюрский'},
    {name: 'Платеозавр', period: 'Триасовый'}
]
console.log(dinosaurs[0])
console.log(dinosaurs[0].name)
console.log(dinosaurs[2].name)

//example8
let anna = {name: 'Анна', age: 11, luckyNumbers: [2, 4, 8, 16]}
let dave = {name: 'Дэйв', age: 5, luckyNumbers: [3, 9, 40]}
let kate = {name: 'Кейт', age: 9, luckyNumbers: [1, 2, 3]}

let friends = [anna, dave, kate]
console.log(friends[0])
console.log(friends[1].name)
console.log(friends[1].luckyNumbers[2])

//example9
let owedMoney = {}
owedMoney['Джимми'] = 5
owedMoney['Анна'] = 7

owedMoney['Джимми'] += 3
console.log(owedMoney['Джимми'])
console.log(owedMoney)

//example10
let movies = {
    'В поисках Немо': {
        releaseDate: 2003,
        duration: 100,
        actors: ['Альберт Брукс', 'Эллен Дедженерес', 'Александр Гоулд'],
        format: 'DVD'
    },
    'Звёздные войны: Эпизод 6 - Возвращение джедая': {
        releaseDate: 1983,
        duration: 134,
        actors: ['Марк Хэмилл', 'Харрисон Форд', 'Кэрри Фишер'],
        format: 'DVD'
    },
    'Гарри Поттер и Кубок огня': {
        releaseDate: 2005,
        duration: 157,
        actors: ['Дэниел Рэдклифф', 'Эмма Уотсон', 'Руперт Гринт'],
        format: 'Blu-ray'
    }
}
let findingNemo = movies['В поисках Немо']
console.log(findingNemo.duration)
console.log(findingNemo.format)

let cars = {
    releaseDate: 2006,
    duration: 117,
    actors: ['Оуэн Уилсон', 'Бонни Хант', 'Пол Ньюман'],
    format: 'Blue-ray'
}
movies['Тачки'] = cars
console.log(movies)
console.log(Object.keys(movies))

//exercises
//exercise1
let scores = {
    "Друг1": 0,
    "Друг2": 0,
    "Друг3": 0
// добавьте больше друзей по мере необходимости
};
// Для добавления очков к счету друга, вы можете использовать следующую функцию:
function addScore(friend, points) {
    if(scores[friend] !== undefined) {
        scores[friend] += points;
    } else {
        console.log("Друг не найден в объекте scores.");
    }
}
// Пример использования функции:
addScore("Друг1", 5);
console.log(scores);

//exercise2
let myCrazyObject = {
    'name': 'Нелепый объект',
    'some array': [7, 9, { purpose: 'путаница', number: 123 }, 3.3],
    'random animal': 'Банановая акула'
}
console.log(myCrazyObject['some array'][2]['number'])