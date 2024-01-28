import { Header } from './todolist/Header/Header.js'
import { TasksList } from './todolist/TasksList/TasksList.js'
import { ButtonsPanel } from './todolist/ButtonsPanel/ButtonsPanel.js'

export function Todolist(todolistData) {

    const container = document.createElement('div')

    const headerElement = Header(todolistData.todolist.title)
    const tasksListElement = TasksList(todolistData.todolist.tasks)
    const buttonsPanelElement = ButtonsPanel()

    container.append(headerElement, tasksListElement, buttonsPanelElement)

    return container
}