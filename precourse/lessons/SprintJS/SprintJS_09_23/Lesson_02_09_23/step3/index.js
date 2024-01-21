let fruits = ['Яблоко', 'Апельсин', 'Слива', 'ffff', 'ssssss']

// Цикл while
let i = 0
while (fruits.length > i) {
    console.log(fruits[i])
    i++
}

// Цикл for
for (let i = 0; fruits.length > i; i++) {
    console.log(fruits[i])
}

// Цикл forEach
fruits.forEach(arrayElement => console.log(arrayElement)) // работает с исходным массивом

// Метод map

fruits.map(arrayElement => console.log(arrayElement)) // работает с копией

