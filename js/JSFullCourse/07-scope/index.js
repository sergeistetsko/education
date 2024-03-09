// Урок 1 - Области видимости-----------------------------------------------------------------------------------------

// Область видимости определяет границы действия переменной

// Глобальная область видимости - созданы глобальные переменные a, b, c

// Локальная область видимости - 1 - созданы локальные переменные a и с, 2 - создана локальная переменная b

// Глобальные переменные
let a
let b

function myFn() {
    let b // локальная переменная
    a = true
    b = 10
    console.log(b) // область видимости функции
}

myFn()

console.log(a)
console.log(b)

// Урок 2 - Цепочка областей видимости----------------------------------------------------------------------------------

// В данном примере представлена цепочка областей видимости, когда есть глобальная область видимости и локальная в локальной области видимости

// Устройство таково, что если переменная не найдена в локальной области видимости, она будет искать её в области видимости выше

const number1 = 5

function myFn2() {
    function innerFn() {
        console.log(number1)
    }
    innerFn()
}

myFn2()

// Урок 3 - Жизненный цикл переменных ----------------------------------------------------------------------------------

// Из урока 2 - детально рассмотрели каждую переменную и её жизненный цикл

// Урок 4 - Типы областей видимости ------------------------------------------------------------------------------------

// глобальная, функции, блока (переменные let и const привязаны к области видимости этого блока)

// переменные объявляем перед их использованием, используем const везде где это возможно, внутри функций не изменять переменные с внешних областей видимости

// Урок 5 - Строгий режим ----------------------------------------------------------------------------------------------

// 'use strict' - строгий режим в самом верху программы, инструкция более пристально анализировать код интерпретатору

// будет ошибка при использовании необъявленных переменных




