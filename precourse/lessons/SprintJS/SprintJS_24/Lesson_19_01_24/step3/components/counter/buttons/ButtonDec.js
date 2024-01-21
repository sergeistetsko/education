import {decreaseDataCount} from '../../../data/data.js'
export function ButtonDec() {
    const buttonElement = document.createElement('button')
    buttonElement.append('-')
    buttonElement.addEventListener('click', oneClickCallback)
    return buttonElement
}

function oneClickCallback() {
    decreaseDataCount()
}