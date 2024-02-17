const buttonPlus = document.getElementById('button-plus')
const buttonMinus = document.getElementById('button-minus')
const buttonMultiply = document.getElementById('button-multiply')
const buttonDivide = document.getElementById('button-divide')

function onButtonPlusClick() {
    const input1 = document.getElementById('number1')
    const input2 = document.getElementById('number2')

    const number1 = Number(input1.value)
    const number2 = Number(input2.value)
    
    let summa = number1 + number2
    alert(summa)
}

function onButtonMinusClick() {
    const input1 = document.getElementById('number1')
    const input2 = document.getElementById('number2')

    const number1 = Number(input1.value)
    const number2 = Number(input2.value)

    let minus = number1 - number2
    alert(minus)
}

function onButtonMultiplyClick() {
    const input1 = document.getElementById('number1')
    const input2 = document.getElementById('number2')

    const number1 = Number(input1.value)
    const number2 = Number(input2.value)

    let multiply = number1 * number2
    alert(multiply)
}

function onButtonDivideClick() {
    const input1 = document.getElementById('number1')
    const input2 = document.getElementById('number2')

    const number1 = Number(input1.value)
    const number2 = Number(input2.value)

    let divide = number1 / number2
    alert(divide)
}

buttonPlus.addEventListener('click', onButtonPlusClick)
buttonMinus.addEventListener('click', onButtonMinusClick)
buttonMultiply.addEventListener('click', onButtonMultiplyClick)
buttonDivide.addEventListener('click', onButtonDivideClick)
