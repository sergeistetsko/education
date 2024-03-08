// Урок 1 - Переменные-----------------------------------------------------------------------------------------

// Переменные дают возможность повторного использования к значению

// Можно сохранить значение в переменной, а также перезаписывать значения

// Переменная является по сути коробкой для значения

// Названия для переменных - 3 подхода:
// PascalCase - все слова начинаются с заглавных букв - для типов и классов
// Все с заглавной, а между ними знак подчёркивания - когда значения известны до запуска приложения и не меняются - константы
// camelCase - первая буква в нижнем регистре, а остальные с заглавной буквы

// Названия переменных должны быть понятны для других участников проекта - длинное, но понятное

// Урок 2 - Объявление переменных--------------------------------------------------------------------------------

// 3 ключевых слова - let, const, var
// var - не рекомендуется использовать

// let a - объявление переменной a - интерпретатору даётся инструкция создать новую переменную с названием a

// const c = 10 - объявление и присваивание переменной значения вновь созданной переменной

// a = true - присваивание значения переменной, которая была объявлена

// let a = 10 - переменной присвоится 10 и её можно переприсвоить новое значение

// let b

// b = false

// const c = 10 - нужно объявлять переменную и присвоить ей новое значение в одной строке

// новые значения присвоить нельзя или будет ошибка

// Если переменной не было задано значение, мы получим от интерпретатора undefined

// Урок 3 - Практика по созданию переменных ----------------------------------------------------------------------

let myName

console.log(myName)

myName = 'Sergey'

console.log(myName)

const yourName = 'Sergey2'

console.log(yourName)

// Везде использовать const, где не нужно переприсваивать значение переменной

// Урок 4 - Примитивные типы ------------------------------------------------------------------------------------

// Типы переменных определяются типом присваиваемого значения этой переменной

// Типы JS

// Примитивные типы и ссылочный тип

// 6 примитивных типов - string/boolean/number/null/undefined/symbol

// null - значение пусто, как правило я сам его задаю

// undefined - значения не существует, оно не определено

// symbol - для создания уникальных значений

// 1 ссылочный тип - object

// В примитивных типах значение полностью хранится в памяти

// Урок 5 - Ссылочный тип ------------------------------------------------------------------------------------

// Это набор свойств, ключ и значение, то есть объекты
// Переменная будет хранить ссылку на объект, который хранится в другом месте

// Массив это тоже объект по сути, то есть будет ссылка на область в памяти
// При присваивании переменной объекта в переменной хранится только ссылка на объект

// Много переменных будет указывать на один и тотже объект в памяти

const objectA = {
    a: 10,
    b: true
}

const copyOfA = objectA

copyOfA.a = 20

copyOfA.c = 'abc'

console.log(copyOfA)

// Урок 6 - Динамическая типизация -----------------------------------------------------------------------------------

// одной и той же переменной можно переприсваивать значения разных типов - динамическая типизация - динамически типизируемый язык

// в JS это не ошибки