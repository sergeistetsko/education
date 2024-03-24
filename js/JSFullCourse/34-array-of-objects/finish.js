/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
    {
        carBrand: 'Audi',
        price: 10000,
        isAvailableForSale: true
    },
    {
        carBrand: 'Ford',
        price: 12000,
        isAvailableForSale: false
    },
    {
        carBrand: 'Mazda',
        price: 15000,
        isAvailableForSale: true
    },
]

const newCar = {
    carBrand: 'Golf',
    price: 13000,
    isAvailableForSale: false
}

cars.push(newCar)

console.log(cars)