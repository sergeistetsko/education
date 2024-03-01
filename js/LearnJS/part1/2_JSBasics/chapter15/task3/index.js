// В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

let xValue = +prompt('Введите x: ')
let nValue = +prompt('Введите n: ')

function pow(x, n) {
    let resultValue = 1
    while (n >= 1) {
        resultValue *= x
        n--
    }
    return resultValue
}

alert('Результат: ' + pow(xValue, nValue))