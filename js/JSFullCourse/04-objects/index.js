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