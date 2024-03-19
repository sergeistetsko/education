// Урок 1 - Тернарный оператор-----------------------------------------------------------------------------------------

// У тернарного оператора 3 операнда
// Конструкция с тернарным оператором это выражение возвращающее значение
// Условие (любое выражение) ? Выражение 1 : Выражение 2

// Если условие правдиво, то возвращается результат Выражения 1, иначе возвращается результат Выражения 2

// Для наглядности рекомендуется писать на разных строках

const value = 11

value
    ? console.log('Условие истинно')
    : console.log('Условие ложно')

const value1 = 11
const value2 = 25

value1 && value2
    ? myFunction(value1, value2)
    : myFn()

let value3 = 11
console.log(value3 >= 0 ? value3 : - value3) // 11

value3 = -5
const res = value >= 0 ? value3 : -value3
console.log(res) // 5