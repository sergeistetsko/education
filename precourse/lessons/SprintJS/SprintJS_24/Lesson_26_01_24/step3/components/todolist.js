import { Header } from './todolist/Header/Header.js'
import { TasksList } from './todolist/TasksList/TasksList.js'
import { Button } from './todolist/Button/Button.js'
import { AddNewTaskDialog } from './todolist/AddNewTaskDialog/AddNewTaskDialog.js'
import { openAddNewTaskDialog } from '../data/data.js'

export function Todolist(todolistData) {

    const container = document.createElement('div')

    const headerElement = Header(todolistData.todolist.title)
    const tasksListElement = TasksList(todolistData.todolist.tasks)
    const buttonElement = Button('add', openAddNewTaskDialog)
    const addTaskDialogElement = AddNewTaskDialog()

    container.append(headerElement, tasksListElement, buttonElement, addTaskDialogElement)

    return container
}