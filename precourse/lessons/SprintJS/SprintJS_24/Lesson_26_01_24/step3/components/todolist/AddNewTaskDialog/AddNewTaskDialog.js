import {addTask, closeAddNewTaskDialog, data} from '../../../data/data.js'

export function AddNewTaskDialog() {
    const container = document.createElement('dialog')

    container.open = data.todolist.isAddNewTaskDialogOpen

    const dialogHeaderElement = document.createElement('h4')
    dialogHeaderElement.append('Enter new task title')

    const inputElement = document.createElement('input')

    const saveButtonElement = document.createElement('button')
    saveButtonElement.addEventListener('click', () => {
        addTask(inputElement.value)
        closeAddNewTaskDialog()
    })
    saveButtonElement.append('save')

    const cancelButtonElement = document.createElement('button')
    cancelButtonElement.addEventListener('click', () => closeAddNewTaskDialog())
    cancelButtonElement.append('cancel')

    container.append(dialogHeaderElement, inputElement, saveButtonElement, cancelButtonElement)

    return container
}