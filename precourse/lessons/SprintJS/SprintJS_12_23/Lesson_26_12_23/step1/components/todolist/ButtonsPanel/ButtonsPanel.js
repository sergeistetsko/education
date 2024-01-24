import {createTask} from '../../../data/data.js'

export function ButtonsPanel() {
    const container = document.createElement('div')
    const addButtonElement = document.createElement('button')
    addButtonElement.append('+ add')

    addButtonElement.addEventListener('click', createTask)

    container.append(addButtonElement)
    return container
}
