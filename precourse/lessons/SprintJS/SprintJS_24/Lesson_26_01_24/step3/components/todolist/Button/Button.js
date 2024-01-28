/*import {openAddNewTaskDialog} from '../../../data/data.js'

export function Button() {
    const container = document.createElement('div')

    const addButtonElement = document.createElement('button')
    addButtonElement.append('+')
    addButtonElement.addEventListener('click', () => openAddNewTaskDialog())


    container.append(addButtonElement)
    return container
}*/

export function Button(title, function1) {
    function oneClickCallback() {
        function1()
    }
    const buttonElement = document.createElement('button')
    buttonElement.append(title)
    buttonElement.addEventListener('click', oneClickCallback)
    return buttonElement
}