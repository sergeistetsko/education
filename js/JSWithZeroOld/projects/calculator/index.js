const buttonPlus = document.getElementById('button-plus')
const buttonMinus = document.getElementById('button-minus')
const buttonMultiply = document.getElementById('button-multiply')
const buttonDivide = document.getElementById('button-divide')

const input1 = document.getElementById('number1')
const input2 = document.getElementById('number2')
function getNumber1() {
    return Number(input1.value)
}
function getNumber2() {
    return Number(input2.value)
}
function makeOperation(operationCode) {
    
    if (operationCode === '+') {
        let result = getNumber1() + getNumber2()
        window.alert(result)
    } else if(operationCode === '-') {
        let result = getNumber1() - getNumber2()
        window.alert(result)
    } else if(operationCode === '*') {
        let result = getNumber1() * getNumber2()
        window.alert(result)
    } else if(operationCode === '/') {
        let result = getNumber1() / getNumber2()
        window.alert(result)
    } else {
        window.alert('operation is unknown')
    }
}
function onButtonPlusClick() {
    makeOperation('+')
}
function onButtonMinusClick() {
    makeOperation('-')
}
function onButtonMultiplyClick() {
    makeOperation('*')
}
function onButtonDivideClick() {
    makeOperation('/')
}
buttonPlus.addEventListener('click', onButtonPlusClick)
buttonMinus.addEventListener('click', onButtonMinusClick)
buttonMultiply.addEventListener('click', onButtonMultiplyClick)
buttonDivide.addEventListener('click', onButtonDivideClick)
