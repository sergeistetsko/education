let fruits = ['Яблоко', 'Апельсин', 'Слива', 'ffff', 'ssssss']

// Базовые методы

fruits.push('Бананас')
fruits.unshift('Бананас')
fruits.pop()
fruits.shift()

// Вывод в консоль

console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4])

// Превращение в строку

console.log(fruits.join(' '))

// Поиск индекса элемента в массиве

console.log(fruits.indexOf('Яблоко'))
console.log(fruits.indexOf('Бананас'))

// Метод slice срез

console.log(fruits.slice(1,2))
console.log(fruits.slice(1,3))
console.log(fruits.slice(1))
console.log(fruits.slice(-1))
console.log(fruits.slice(-2))