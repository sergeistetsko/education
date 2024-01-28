import {Button} from '../../Button/Button.js'
import {deleteTask} from '../../../../data/data.js'

export function Task(task) {
    const container = document.createElement('li')
    container.append(task.title)

    const deleteButtonElement = Button('del', () => {
        deleteTask(task.id)
    })
    container.append(deleteButtonElement)
    
    return container
}