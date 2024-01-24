import {closeAddTaskDialog, createTask, data} from '../../../data/data.js'

export function AddNewTaskDialog() {
    const container = document.createElement('dialog')
    const inputElement = document.createElement('input')
    const saveButtonElement = document.createElement('button')
    saveButtonElement.append('save')
    saveButtonElement.addEventListener('click', () =>
    createTask(inputElement.value))


    const cancelButtonElement = document.createElement('button')
    cancelButtonElement.append('cancel')
    cancelButtonElement.addEventListener('click', () => {
        closeAddTaskDialog()
    })

    if (data.todolist.isAddDialogOpen) {
        container.open = true
    }

    container.append(inputElement, saveButtonElement, cancelButtonElement)
    return container
}