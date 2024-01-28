import {openAddNewTaskDialog} from '../../../data/data.js'

export function Button() {
    const container = document.createElement('div')

    const addButtonElement = document.createElement('button')
    addButtonElement.append('+')
    addButtonElement.addEventListener('click', () => openAddNewTaskDialog())


    container.append(addButtonElement)
    return container
}