// Урок 1 - Конкатенация строк------------------------------------------------------------------------------------------

// оператором + можно сконкатенировать строки (соединить их)

const hello = 'Hello'
const world = 'World'

const greeting = hello + ' ' + world

// второе выражение - аналогично первому

const greeting2 = `${hello} ${world}` // Шаблонные строки

// Пример:

const myName = 'Sergey'
const myCity = 'Brest'

const myGreeting = `Привет. Меня зовут ${myName}. Я живу в городе ${myCity}.`

console.log(myGreeting)