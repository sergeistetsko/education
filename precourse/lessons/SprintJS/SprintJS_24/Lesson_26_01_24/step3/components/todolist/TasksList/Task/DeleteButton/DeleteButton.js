import {deleteTask} from '../../../../../data/data.js'

export function DeleteButton(taskId) {
    const container = document.createElement('button')
    container.append('x')
    container.addEventListener('click', () => deleteTask(taskId))
    return container
}