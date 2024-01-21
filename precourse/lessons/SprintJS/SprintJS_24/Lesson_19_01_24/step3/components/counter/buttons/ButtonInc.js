import {increaseDataCount} from '../../../data/data.js'
export function ButtonInc() {
    const buttonElement = document.createElement('button')
    buttonElement.append('+')
    buttonElement.addEventListener('click', oneClickCallback)
    return buttonElement
}

function oneClickCallback() {
    increaseDataCount()
}