const operationButtons = document.getElementsByClassName('operation-block')

const input1 = document.getElementById('number1')
const input2 = document.getElementById('number2')
function makeOperation(operationCode) {
    let number1 = Number(input1.value)
    let number2 = Number(input2.value)
    
    if (operationCode === '+') {
        let result = number1 + number2
        window.alert(result)
    } else if(operationCode === '-') {
        let result = number1 - number2
        window.alert(result)
    } else if(operationCode === '*') {
        let result = number1 * number2
        window.alert(result)
    } else if(operationCode === '/') {
        let result = number1 / number2
        window.alert(result)
    } else {
        window.alert('operation is unknown')
    }
}
function onOperationButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget;
    let operation = clickedElement.innerHTML
    makeOperation(operation)
}

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', onOperationButtonClick)
}
