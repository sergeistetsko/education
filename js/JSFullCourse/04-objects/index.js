// Урок 1 - Объекты-----------------------------------------------------------------------------------------

// Объект

const myCity = {
    city: 'New York',
    popular: true,
    country: 'USA'
}

// Порядок свойств не имеет значения

// Получение значений свойств через точечную нотацию

console.log(myCity.city)
console.log(myCity.popular)
console.log(myCity.country)

// Также можно поменять свойство через точечную нотацию

myCity.city = 'Las Vegas'

// Также можно использовать точечную нотацию для добавления новых свойств

// Урок 2 - Создание и удаление свойств объектов--------------------------------------------------------------

const yourCity = {
    city: 'New York'
}

yourCity.popular = true

yourCity.country = 'USA'

console.log(yourCity)

// оператор delete - для удаления того или иного свойства из объекта

delete yourCity.country

console.log(yourCity)

// Также можно добавлять свойства с их значениями с использованием квадратных скобок

const myCity2 = {
    city: 'New York'
}

myCity2['popular'] = true

const countryPropertyName = 'country'

myCity2[countryPropertyName] = 'USA'

console.log(myCity2)

// Урок 3 - Работа с вложенными объектами в JS--------------------------------------------------------------

const myCity3 = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}

console.log(myCity3.info.isPopular)

delete myCity3.info['isPopular']

console.log(myCity3.info.isPopular)

// Урок 4 - Сокращённый формат записи свойств--------------------------------------------------------------

// Использование переменных

// Сокращённые свойства лучше использовать в начале объекта

const name = 'Bogdan'
const postsQty = 23

const userProfile = {
    name,
    postsQty,
    hasSignedAgreement: false
}

console.log(userProfile)

// Урок 5 - Глобальные объекты------------------------------------------------------------------------------

// Глобальный объект - window - в веб-браузере - объект с огромным количеством свойств и методов

// У него есть методы и свойства, которые доступны глобально

// Урок 6 - Методы объекта -----------------------------------------------------------------------------------

// Метод объекта - свойство объекта, значение которого функция

const myCity4 = {
    city: 'New York',
    cityGreeting: function () {
        console.log('Greetings!!!')
    }
}

myCity4.cityGreeting()

// Также можно создать метод без ключевого слова function и :

const myCity5 = {
    city: 'New York',
    cityGreeting() {
        console.log('Greetings!!!')
    }
}

myCity5.cityGreeting() // Для того чтобы вызвать метод, необходимо указать круглые скобки и через точечную нотацию достучаться к объекту

// Урок 7 - JSON -----------------------------------------------------------------------------------

// Все свойства находятся в двойных кавычках и используется для обмена данными в интернете

// Как происходит передача данных, в виде строки ?

// Конвертация происходит через JSON.parse() получив .json можно сконвертировать его в объект
// Наоборот JSON.stringify() переводит js-объект в json

const post = {
    title: 'My post',
    likesQty: 5
}
const postStringified = JSON.stringify(post)

JSON.parse(postStringified) // распарсили JSON объект в JS-объект


